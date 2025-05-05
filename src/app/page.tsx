import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Barber shop interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 text-center text-accent max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            HOMEM DE VERDADE CUIDA DA APARÊNCIA!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Torne-se membro do nosso clube de assinatura e mantenha o visual
            sempre impecável!
          </p>
          <Link
            href="/contato"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-md text-lg font-medium hover:bg-secondary-light transition-colors"
          >
            Reserve um horário
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section bg-background">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-4xl font-heading text-primary text-center mb-12">
            NOSSA MARCA
          </h2>
          <div className="prose prose-lg max-w-none text-primary">
            <p>
              <strong>Gabano</strong> é uma variação do sobrenome 'Galano' e sua
              origem pode ser rastreada até a Grã Bretanha, o significado deste
              sobrenome é:{" "}
              <strong>
                "O que tem uma aparência bonita, agradável ou atraente"
              </strong>{" "}
              e também pode significar <strong>"Homem elegante"</strong>.
            </p>
            <p>
              E assim nos tornamos <strong>"Western"</strong> personalizado e
              único, trazendo para o ecossistema masculino um novo conceito de
              estética e cuidado, tornando o <strong>homem Western</strong>,
              mais bonito e elegante!
            </p>
            <p className="italic">
              Ele mostrou a você, ó homem, o que é bom e o que o Senhor exige:
              pratique a justiça, ame a fidelidade e ande humildemente com o seu
              Deus. (Miquéias 6:8)
            </p>
            <p>
              A essência e a virtude do homem vai além da beleza estética, sua
              beleza e elegância esta vinculada diretamente com suas ações
              cotidianas, em suas praticas embasadas na{" "}
              <strong>justiça, fidelidade e humildade</strong>.
            </p>
            <p>
              Então ser <strong>Western</strong> é ser um homem com{" "}
              <strong>valores</strong> que transcende a sua aparência estética e
              física, mas de alguém que se conecta com a Western na essência e
              os pilares que nos norteia: <strong>Deus</strong>, a{" "}
              <strong>família</strong> e o <strong>amor</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-section bg-accent-light">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-4xl font-heading text-primary text-center mb-12">
            O QUE ESTÃO DIZENDO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="mb-4 text-primary italic">
                "Atendimento impecável! O melhor lugar para cuidar da aparência
                em São Paulo."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  RC
                </div>
                <div className="ml-4">
                  <p className="font-bold text-primary">Ricardo Costa</p>
                  <p className="text-primary-light text-sm">
                    Cliente desde 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="mb-4 text-primary italic">
                "Profissionais excelentes e ambiente agradável. Recomendo para
                todos!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  MS
                </div>
                <div className="ml-4">
                  <p className="font-bold text-primary">Marcos Silva</p>
                  <p className="text-primary-light text-sm">
                    Cliente desde 2021
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="mb-4 text-primary italic">
                "Serviço de primeira qualidade. Vale cada centavo investido!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  JP
                </div>
                <div className="ml-4">
                  <p className="font-bold text-primary">João Paulo</p>
                  <p className="text-primary-light text-sm">
                    Cliente desde 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-section">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-4xl font-heading text-primary text-center mb-12">
            INSTAGRAM
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Instagram Post 1 */}
            <div className="aspect-square relative overflow-hidden bg-primary/10 rounded-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary-light">Imagem do Instagram</span>
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div className="aspect-square relative overflow-hidden bg-primary/10 rounded-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary-light">Imagem do Instagram</span>
              </div>
            </div>

            {/* Instagram Post 3 */}
            <div className="aspect-square relative overflow-hidden bg-primary/10 rounded-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary-light">Imagem do Instagram</span>
              </div>
            </div>

            {/* Instagram Post 4 */}
            <div className="aspect-square relative overflow-hidden bg-primary/10 rounded-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary-light">Imagem do Instagram</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary-light transition-colors"
            >
              Siga-nos no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-section bg-accent-light">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-4xl font-heading text-primary text-center mb-12">
            CONECTE-SE CONOSCO
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="#"
              className="bg-background p-6 rounded-lg shadow-md text-center w-full md:w-64"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">WhatsApp</h3>
              <p className="text-primary-light">Entre em contato direto</p>
            </a>

            <a
              href="#"
              className="bg-background p-6 rounded-lg shadow-md text-center w-full md:w-64"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📧</span>
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">Email</h3>
              <p className="text-primary-light">Envie-nos uma mensagem</p>
            </a>

            <a
              href="#"
              className="bg-background p-6 rounded-lg shadow-md text-center w-full md:w-64"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-primary text-xl mb-2">
                Localização
              </h3>
              <p className="text-primary-light">Visite nossa barbearia</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
