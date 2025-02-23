import Image from "next/image";

interface NewsItem {
  title: string;
  imageUrl: string;
  description: string;
  timestamp?: string;
}

interface NewsLayoutProps {
  news: NewsItem[];
}

export default function NewsLayout({ news }: NewsLayoutProps) {
  return (
    <div className="w-full py-8">
      {/* Top Row - 3 Equal Articles */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {news.slice(0, 3).map((article, index) => (
          <div key={index}>
            <div className="relative aspect-[4/3] w-full mb-4">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 text-sm">{article.description}</p>
          </div>
        ))}
      </div>

      {/* Middle Row - 2 Articles */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {news.slice(3, 5).map((article, index) => (
          <div key={index} className="flex gap-4">
            <div className="relative w-1/3 aspect-square">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-lg font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700 text-sm">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - Text Only */}
      <div className="border-t pt-6">
        {news.slice(5).map((article, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
