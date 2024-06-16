"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Input from "./form/input";
import { IoMdMail } from "react-icons/io";
import Category from "./category/Category";


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Alert {
  message: string;
  type: 'success' | 'error';
}

export default function Contact() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [alert, setAlert] = useState<Alert | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setAlert({message: 'E-mail enviado com sucesso!', type: 'success'});
    } else {
      setAlert({message: 'Erro ao enviar o e-mail: ' + result.error, type: 'error'});
    }

    // Hide the alert after 5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  
  return (
    <section
      id="contact"
      className="bg-red-700 flex flex-col w-full md:flex-row md:margin-auto  "
    >
      <div className="md:max-w-[50vw]">
        <Image
          src="/arquitetura.jpg"
          alt="Contato"
          width={1700}
          height={700}
        ></Image>
      </div>
      <div className="relative flex flex-col md:flex-row w-full md:max-w-[50vw] ">
        <Category>
          <IoMdMail className="size-8" />
        </Category>
        <form className="flex flex-col justify-around w-full items-center m-2 gap-2 " onSubmit={handleSubmit}>
          <label htmlFor="#" className="uppercase font-black">entre em contato</label>
          <Input id='name' title='Nome' type='text' value={formData.name} onChange={handleChange} />
          <Input id='email' title='E-mail' type='email' value={formData.email} onChange={handleChange} />
          <Input id='phone' title='Telefone' type='text' value={formData.phone} onChange={handleChange} />
          <Input id='message' title='Mensagem' type='textarea' value={formData.message} onChange={handleChange} />
          <Input title="Enviar" type='submit' onChange={handleChange} />
        </form>
      </div>
      {alert && (
        <div className={`fixed top-2 right-2 max-w-xs p-2 rounded shadow-lg ${
          alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {alert.message}
        </div>
      )}
    </section>
  );
}
