import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const Hub = () => {
  // Static articles for the temporary website
  const articles = [
    {
      id: 1,
      category: 'PBS',
      title: 'Understanding Positive Behaviour Support',
      content: 'Positive Behaviour Support (PBS) is a comprehensive approach to understanding why challenging behaviours occur. It focuses on preventative strategies and teaching alternative skills to improve a persons quality of life.',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      category: 'Support Coordination',
      title: 'How to Prepare for Your NDIS Plan Review',
      content: 'A plan review is your opportunity to discuss what is working, what isn\'t, and what goals you want to achieve in the next year. Here is how you and your Support Coordinator can prepare effectively.',
      created_at: new Date().toISOString()
    }
  ];


  return (
    <div className="container py-16 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl mb-4">Information Hub & Blog</h1>
        <p className="text-muted max-w-2xl mx-auto">Latest updates, resources, and educational materials regarding the NDIS, Support Coordination, and Positive Behaviour Support.</p>
      </div>

      {articles.length === 0 ? (
        <div className="text-center text-muted py-8" style={{ backgroundColor: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <BookOpen size={48} color="var(--primary-light)" style={{ margin: '0 auto 1rem auto' }} />
          <h3>No articles found.</h3>
          <p>Check back later for new resources, or ensure your Django backend is running!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {articles.map((article: any) => (
            <div key={article.id} style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ height: '160px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}>
                <BookOpen size={48} opacity={0.5} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{article.category}</span>
                <h3 style={{ margin: '0.5rem 0 1rem 0' }}>{article.title}</h3>
                <p className="text-muted" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
                  {article.content}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <Calendar size={14} style={{ marginRight: '0.5rem' }} />
                  {new Date(article.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hub;
