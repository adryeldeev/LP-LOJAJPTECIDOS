import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section id="contato" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Newsletter
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Inscreva-se para ficar por dentro das novidades e lançamentos
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 h-12 bg-white border-0 text-gray-900 placeholder:text-gray-500"
              />
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white h-12 whitespace-nowrap">
                Inscrever
              </Button>
            </div>
            <p className="text-sm text-orange-100 mt-4">
              Sem spam. Apenas conteúdo relevante sobre nossos produtos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
