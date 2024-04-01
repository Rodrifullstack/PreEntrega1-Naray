import { useState } from "react";

const CheckOutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    if (email !== confirmEmail) {
      setError('Los correos electrónicos no coinciden');
      return;
    }

    const userData = {
      name,
      phone,
      email
    };

    console.log('Nombre', name);
    console.log('Phone', phone);
    console.log('Email', email);

    onConfirm(userData);
  };

  return (
    <>
      <form onSubmit={handleConfirm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
          <input type="text" className="form-control" value={name} onChange={({ target }) => setName(target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Confirmar Email</label>
          <input type="email" className="form-control" value={confirmEmail} onChange={({ target }) => setConfirmEmail(target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Telefono</label>
          <input type="text" className="form-control" value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="Option">Crear Orden</button>
      </form>
    </>
  );
};

export default CheckOutForm;
