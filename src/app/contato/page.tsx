import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-section">
        <div className="max-w-container mx-auto px-4">
          <h1 className="text-4xl font-heading text-primary text-center mb-12">
            Entre em Contato
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-full">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Telefone
                  </h3>
                  <p className="text-primary-light">(XX) XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-full">
                  <EnvelopeIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Email
                  </h3>
                  <p className="text-primary-light">
                    westernlondrina.barbearia@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary p-3 rounded-full">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Endereço
                  </h3>
                  <p className="text-primary-light">
                    Rua Exemplo, 123
                    <br />
                    Bairro, Cidade - Estado
                    <br />
                    CEP: XXXXX-XXX
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary-light transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
