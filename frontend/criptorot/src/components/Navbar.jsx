import GithubIcon from "../assets/icons/GithubIcon";

export default function Navbar() {
  return (
    <nav className='w-full mt-4 flex flex-row justify-between items-center'>
      <h2 className='font-mono text-xl'>ROT-X</h2>
      <a href='https://github.com/techatlasdev/rotx' target='_blank'>
        <GithubIcon className='size-7' />
      </a>
    </nav>
  );
}
