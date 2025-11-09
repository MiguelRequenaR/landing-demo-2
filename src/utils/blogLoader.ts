import matter from 'gray-matter';
import { Buffer } from 'buffer';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  author?: string;
  content: string;
}

// Función para obtener todos los posts del blog
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Asegurar que Buffer esté disponible globalmente
  if (typeof window !== 'undefined') {
    (window as any).Buffer = Buffer;
  }
  
  const posts: BlogPost[] = [];

  // Importar todos los archivos .md usando rutas relativas
  const modules = import.meta.glob('../content/blog/*.md', { 
    eager: true,
    as: 'raw'
  });

  for (const path in modules) {
    try {
      const module = modules[path];
      
      // Manejar diferentes formatos de respuesta de Vite
      let rawContent: string;
      if (typeof module === 'string') {
        rawContent = module;
      } else if (module && typeof module === 'object' && 'default' in module) {
        rawContent = (module as any).default;
      } else {
        console.warn(`Formato inesperado para ${path}:`, typeof module, module);
        continue;
      }
      
      if (!rawContent || typeof rawContent !== 'string') {
        console.warn(`Contenido inválido para ${path}`, typeof rawContent);
        continue;
      }

      const { data, content } = matter(rawContent);
      
      // Extraer el ID del nombre del archivo si no está en el frontmatter
      const fileName = path.split('/').pop()?.replace('.md', '') || '';
      
      posts.push({
        id: data.id || fileName,
        title: data.title || 'Sin título',
        date: data.date || '',
        image: data.image || '',
        excerpt: data.excerpt || '',
        author: data.author,
        content: content.trim(),
      });
    } catch (error) {
      console.error(`Error procesando archivo ${path}:`, error);
    }
  }

  // Ordenar por fecha (más recientes primero)
  return posts.sort((a, b) => {
    try {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } catch {
      return 0;
    }
  });
}

// Función para obtener un post específico por ID
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.id === id) || null;
}

