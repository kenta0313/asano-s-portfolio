import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, TextField } from '@material-ui/core';
import styles from './contact.module.scss';


const Contacts = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      body: body
    };

    axios({
      method: "post",
      url: "https://kenta0313.microcms.io/api/v1/portfolio",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.x_api_key
      }
    })
      .then(() => {
        router.push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <div className={styles.title}>
        <h1>Contact</h1>
        <form className={styles.form} >
          <p>
            <TextField
              required
              label="メールアドレス"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </p>
          <p>
            <TextField
              required
              label="お名前"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </p>
          <p>
            <TextField
              required
              label="お問い合わせ内容"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
          </p>
          <Button variant="contained" color="primary" onClick={handleSubmit}>お問い合わせする</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
