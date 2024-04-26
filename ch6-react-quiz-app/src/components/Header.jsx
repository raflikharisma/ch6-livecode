import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="">
      <img src={logoImg} />
      <h1> Questionely </h1>
    </header>
  );
}
