export default function ClubePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-section">
        <div className="max-w-container mx-auto px-4">
          <h1 className="text-4xl font-heading text-primary text-center mb-12">
            Clube de Assinatura
          </h1>

          <div className="prose prose-lg max-w-none text-primary">
            <p>
              Bem-vindo ao Clube de Assinatura da Western Barbearia! Aqui você
              encontrará todas as informações sobre nossos planos e benefícios
              exclusivos para assinantes.
            </p>

            <p>
              Faça parte do nosso clube e desfrute de cortes ilimitados,
              serviços premium e muito mais.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-background rounded-lg shadow-md p-8 border border-primary-light">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Plano Básico
              </h3>
              <p className="text-3xl font-bold text-primary mb-6">
                R$ 99<span className="text-sm font-normal">/mês</span>
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>2 cortes de cabelo por mês</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 barba por mês</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Agendamento prioritário</span>
                </li>
              </ul>
              <button className="w-full bg-secondary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary-light transition-colors">
                Assinar Agora
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-secondary rounded-lg shadow-md p-8 transform scale-105">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Plano Premium
              </h3>
              <p className="text-3xl font-bold text-primary mb-6">
                R$ 159<span className="text-sm font-normal">/mês</span>
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Cortes ilimitados</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>2 barbas por mês</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>1 hidratação por mês</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>15% de desconto em produtos</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-accent px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-light transition-colors">
                Assinar Agora
              </button>
            </div>

            {/* Plano VIP */}
            <div className="bg-background rounded-lg shadow-md p-8 border border-primary-light">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Plano VIP
              </h3>
              <p className="text-3xl font-bold text-primary mb-6">
                R$ 249<span className="text-sm font-normal">/mês</span>
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Todos os serviços ilimitados</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Atendimento exclusivo</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>25% de desconto em produtos</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Kit de produtos grátis mensal</span>
                </li>
              </ul>
              <button className="w-full bg-secondary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary-light transition-colors">
                Assinar Agora
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
