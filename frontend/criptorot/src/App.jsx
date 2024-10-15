import { useState } from "react";
import { encodeFetch, decodeFetch } from "./lib/fetchData";

import KeySelector from "./components/keyselector";
import CardInputText from "./components/CardInputText";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [key, setKey] = useState(13);
  const [encode, setEncode] = useState("");
  const [decode, setDecode] = useState("");

  async function encodeData() {
    const response = await encodeFetch({ text: encode, key: key });
    setDecode(response);
  }

  async function decodeData() {
    const response = await decodeFetch({ text: decode, key: key });
    setEncode(response);
  }

  function UserCopyDataEncode() {
    navigator.clipboard.writeText(encode);
  }

  function UserCopyDataDecode() {
    navigator.clipboard.writeText(decode);
  }

  return (
    <main className='flex flex-col gap-10 px-10 items-center lg:mx-20'>
      <Navbar />
      <h1 className='font-bold text-5xl text-center mt-10 font-mono'>
        ROT-{key}
      </h1>
      <p className='md:text-center md:mx-20'>
        Welcome to the <strong>ROT-X</strong> encryption tool. This application
        allows you to encode and decode text using the <strong>ROT</strong>{" "}
        encryption algorithm. Simply enter your text in the corresponding fields
        and select the encryption key. Ideal for sending encrypted messages
        easily and quickly.
      </p>
      <KeySelector setKey={setKey} keyValue={key} />
      <section className='flex flex-col gap-10 | md:flex-row w-full'>
        <CardInputText
          styleColor='secondary'
          title='Encode'
          textButton='Encode'
          placeholder='Put your text to encode here'
          value={encode}
          setValue={setEncode}
          setAction={encodeData}
          copyData={UserCopyDataEncode}
        />

        <CardInputText
          styleColor='primary'
          title='Decode'
          textButton='Decode'
          placeholder='Put your text to decode here'
          value={decode}
          setValue={setDecode}
          setAction={decodeData}
          copyData={UserCopyDataDecode}
        />
      </section>
      <Footer />
    </main>
  );
}

export default App;
