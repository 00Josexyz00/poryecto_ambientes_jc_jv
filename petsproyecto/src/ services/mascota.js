//Get
const getMascotas = async () => {

    const response = await fetch('http://localhost:8000/api/hoja_vidas', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        }
    });

    const data = await fetch('http://localhost/api/mascotas');
    return await data.json();
};

const Mascotas = {
    getMascotas
};

export default Mascotas;