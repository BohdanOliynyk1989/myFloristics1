import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import validator from 'validator';


import img from '../assets/ChloeElyPhotography-HMF-2019(HR)-117 1.png'

export default function Forms(){

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [tarea, setTarea] = useState('');
const [nameDirty, setNameDirty] = useState(false);
const [emailDirty, setEmailDirty] = useState(false);
const [tareaDirty, setTareaDirty] = useState(false);
const [nameError, setNameError] = useState('Поле не может быть пустым');
const [emailError, setEmailError] = useState('Поле не может быть пустым');
const [tareaError, setTareaError] = useState('Поле не может быть пустым');
const [formValid, setFormValid] = useState(false);
const [phoneIsWalid, setPhoneIsWalid] = useState(true);
const [news, setNews] = useState(true);

const [sub, setSub] = useState("");

useEffect( () => {
  if (nameError || tareaError || emailError) {
    setFormValid(false)
  } else {
    setFormValid(true)
  }
}, [nameError, tareaError, emailError])

const handleSubmit1 = (e) => {
    e.preventDefault();
    setSub('Данные успешно отправлены на сервер!')
    setTimeout( () => {
      setSub('')
    }, 2000)
    
  let msg = ""
    if (news === true) {
      msg = "Спасибо за Вашу подписку!\n"
      msg += "Ваш email:" + email
      alert(msg)
    }
}

const nameHandler = (e) => {
    setName(e.target.value)
    setNameError('')
    if (!e.target.value) {
      setNameError('Поле не может быть пустым')
    }
}

const emailHandler = (e) => {
    setEmail(e.target.value)
    setEmailError('')
    if (!e.target.value) {
      setEmailError('Поле не может быть пустым')
    }
}

const tareaHandler = (e) => {
    setTarea(e.target.value)
    setTareaError('')
    if (!e.target.value) {
      setTareaError('Поле не может быть пустым')
    }
}

const handlerChanged = (e) => {
  const target = e.target;
  target.name === "aboutNews" ? setNews(target.checked) : setEmail(target.value);
};


const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'tarea':
        setTareaDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
    }
}

const validatePhoneNumber = (e) => {
  const isValidPhoneNumber = validator.isMobilePhone(e.target.value, ['uk-UA'])
  
  if (e.target.value === '') {
    setPhoneIsWalid(true)
  } else {
    setPhoneIsWalid(isValidPhoneNumber)
  }
}
  
    return(
      <div className="wrapper forms">
         
          <div className="forms_content">

          <Container>
            <h1 className="forms_title">Пусть ваша любовь цветет</h1>

            <Form onSubmit={handleSubmit1} className='form'>
              {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Имя" value={name} name="name" onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)}/>
              </Form.Group>
              {!phoneIsWalid && <div style={{color: 'red'}}>Неверный формат номера телефона</div>}
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Телефон" onChange={e => validatePhoneNumber(e)}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <Form.Control type="email" placeholder="E-mail" name="email" value={email} onChange={handlerChanged} onChange={e => emailHandler(e)}  onBlur={e => blurHandler(e)}/>
              </Form.Group>
              {(tareaDirty && tareaError) && <div style={{color: 'red'}}>{tareaError}</div>}
              <Form.Group controlId="formBasicPassword">
                <Form.Control as="textarea" rows="3" placeholder="Ваше сообщение" value={tarea} onChange={e => tareaHandler(e)} name="tarea"  onBlur={e => blurHandler(e)}/>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Подписаться на новости?" name="aboutNews" checked={news} onChange={handlerChanged} />              
              </Form.Group>

              <Button disabled={!formValid} variant="primary" type="submit">Отправить</Button>
              <span className="form_submit"><br/>{sub}</span>

            </Form>
          </Container>
          <img src={img} alt="flover"/>
          </div>
       
      </div>
        
    )
}