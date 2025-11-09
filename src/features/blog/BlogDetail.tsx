import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/utils/blogLoader";
import type { BlogPost } from "@/utils/blogLoader";
import AOS from 'aos';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (id) {
        const blogPost = await getBlogPost(id);
        setPost(blogPost);
        setLoading(false);
      }
    }
    loadPost();
  }, [id]);

  // Refrescar AOS cuando cambia el post
  useEffect(() => {
    if (post) {
      AOS.refresh();
    }
  }, [post]);

  if (loading) {
    return (
      <main className="bg-primary py-30 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white">Cargando...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="bg-primary py-30 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold text-white mb-4">Blog no encontrado</h1>
          <Link to="/blog" className="text-secondary hover:underline">
            Volver al blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-primary py-30 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Botón volver */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors mb-8"
          data-aos="fade-up"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al blog
        </Link>

        {/* Imagen principal */}
        <div className="mb-8" data-aos="zoom-in" data-aos-delay="100">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Fecha y autor */}
        <div className="flex items-center gap-4 mb-6" data-aos="fade-up" data-aos-delay="200">
          <hr className="border-secondary w-10" />
          <span className="text-secondary">{post.date}</span>
          {post.author && (
            <>
              <span className="text-white/50">•</span>
              <span className="text-white/80">Por {post.author}</span>
            </>
          )}
        </div>

        {/* Título */}
        <h1 className="text-5xl font-semibold text-white mb-8" data-aos="fade-up" data-aos-delay="300">
          {post.title}
        </h1>

        {/* Contenido Markdown */}
        <div className="prose prose-invert max-w-none text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          <ReactMarkdown
            components={{
              h2: (props) => <h2 className="text-3xl font-semibold text-white mt-8 mb-4" data-aos="fade-up" {...props} />,
              h3: (props) => <h3 className="text-2xl font-semibold text-white mt-6 mb-3" data-aos="fade-up" {...props} />,
              p: (props) => <p className="mb-4 text-lg" data-aos="fade-up" {...props} />,
              ul: (props) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4" data-aos="fade-up" {...props} />,
              ol: (props) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" data-aos="fade-up" {...props} />,
              li: (props) => <li className="mb-1" {...props} />,
              strong: (props) => <strong className="text-white font-semibold" {...props} />,
              em: (props) => <em className="italic" {...props} />,
              blockquote: (props) => <blockquote className="border-l-4 border-secondary pl-4 italic my-4" data-aos="fade-left" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

