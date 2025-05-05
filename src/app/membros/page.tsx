"use client";

import { useState } from "react";

export default function MembersPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder. In a real app, you would authenticate with a backend
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-section">
        <div className="max-w-container mx-auto px-4">
          <h1 className="text-4xl font-heading text-primary text-center mb-12">
            Área de Membros
          </h1>

          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="bg-background rounded-lg shadow-md p-8 border border-primary-light">
                <h2 className="text-2xl font-heading text-primary mb-6">
                  Login
                </h2>
                <form onSubmit={handleLogin} className="space-y-4">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-secondary"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-primary"
                      >
                        Lembrar-me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-secondary hover:text-secondary-light"
                      >
                        Esqueceu a senha?
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary-light transition-colors"
                  >
                    Entrar
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-primary">
                    Não tem uma conta?{" "}
                    <a
                      href="#"
                      className="text-secondary hover:text-secondary-light"
                    >
                      Registre-se
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-background rounded-lg shadow-md p-8 border border-primary-light">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-heading text-primary">
                  Bem-vindo à sua área de membro!
                </h2>
                <button
                  onClick={handleLogout}
                  className="bg-primary text-accent px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-light transition-colors"
                >
                  Sair
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading text-primary mb-4">
                    Seus agendamentos
                  </h3>
                  <div className="bg-background-dark/5 p-4 rounded-md">
                    <p className="text-primary-light">
                      Você não tem agendamentos futuros.
                    </p>
                    <button className="mt-4 bg-secondary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-light transition-colors">
                      Agendar serviço
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-primary mb-4">
                    Seu plano atual
                  </h3>
                  <div className="bg-secondary/10 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-primary">Plano Premium</h4>
                      <span className="bg-secondary text-primary text-xs px-2 py-1 rounded-full">
                        Ativo
                      </span>
                    </div>
                    <p className="text-primary-light mb-4">
                      Próxima renovação: 15/06/2023
                    </p>
                    <button className="bg-secondary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary-light transition-colors">
                      Gerenciar assinatura
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
