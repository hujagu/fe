const Planes = props => {
    return (  
        {list.map(item => (
            <li key={item.id}>
              <div>{item.id}</div>
              <div>{item.firstname}</div>
              <div>{item.lastname}</div>
              <div>{item.year}</div>
            </li>
          ))}
    );
  };

  export default Planes;