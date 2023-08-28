import React from 'react';

const PeopleSaid = () => {
  return (
    <div className="flex gap-20">
      <div className="basis-1/2 overflow-hidden">
        <img
          className="align-middle rounded-3xl"
          src="https://images.pexels.com/photos/2203535/pexels-photo-2203535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="basis-1/2">
        <p className="text-2xl leading-relaxed	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati nam, mollitia
          dicta fuga saepe quos, vel facilis voluptas ab magnam doloremque cumque distinctio eos
          itaque. Natus optio facilis officiis.
        </p>
        <h4 className="mt-8 text-3xl font-bold">Le Quang Duy</h4>
      </div>
    </div>
  );
};

export default PeopleSaid;
