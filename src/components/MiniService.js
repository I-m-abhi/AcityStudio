const MiniService = ({serviceList}) => {
  
  return (
      <div className='service-item'>
        {serviceList.icon}
        <br />
        <br />
        <h3>{serviceList.name}</h3>
        <br />
        <p>{serviceList.details}</p>
      </div>
  )
};

export default MiniService;