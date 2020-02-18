const getTasks = async () => {
    const data = await fetch('http://www.mocky.io/v2/5e3462f13000008245d9647a');
    return await data.json();
};

const Tasks = {
    getTasks
};

export default Tasks;