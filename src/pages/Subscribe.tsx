import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;
function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );
  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate("/event");
  }
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicacao Completa</strong> com
            <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            em apenas uma semana voce vai dominar na pratica uma das tecnologias
            mais utilizadas e com alta demanda para acessar melhores
            oportunidades no mercado
          </p>
        </div>
        <div>
          <div className="p-8 bg-gray-700 border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                type="text"
                className="bg-gray-900 rounded px-5 h-14"
                placeholder="Seu nome completo"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="bg-gray-900 rounded px-5 h-14"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 bg-green-500 py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
      </div>
      <img src="/src/assets/cold-mockup.png" className="mt-10"></img>
    </div>
  );
}

export default Subscribe;
