export interface PeopleSaidDataType {
  _id: string;
  name: string;
  photo: string;
  content: string;
}

const peopleSaidData = [
  {
    _id: '0001',
    name: 'Gerald Andrews',
    photo:
      'https://images.pexels.com/photos/2203535/pexels-photo-2203535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dicta vitae animi minima tempora debitis maiores alias, ut delectus nobis ea. Accusamus deserunt eveniet quae repudiandae quidem? Quisquam, quasi officia.'
  },
  {
    _id: '0002',
    name: 'Chad Sullivan',
    photo:
      'https://images.pexels.com/photos/1588077/pexels-photo-1588077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dicta vitae animi minima tempora debitis maiores alias, ut delectus nobis ea. Accusamus deserunt eveniet quae repudiandae quidem? Quisquam, quasi officia.'
  },
  {
    _id: '0003',
    name: 'Dustin Ortiz',
    photo:
      'https://images.pexels.com/photos/3007318/pexels-photo-3007318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dicta vitae animi minima tempora debitis maiores alias, ut delectus nobis ea. Accusamus deserunt eveniet quae repudiandae quidem? Quisquam, quasi officia.'
  },
  {
    _id: '0004',
    name: 'Nell Reynolds',
    photo:
      'https://images.pexels.com/photos/2479941/pexels-photo-2479941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dicta vitae animi minima tempora debitis maiores alias, ut delectus nobis ea. Accusamus deserunt eveniet quae repudiandae quidem? Quisquam, quasi officia.'
  },
  {
    _id: '0005',
    name: 'Teresa Fleming',
    photo:
      'https://images.pexels.com/photos/2169093/pexels-photo-2169093.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dicta vitae animi minima tempora debitis maiores alias, ut delectus nobis ea. Accusamus deserunt eveniet quae repudiandae quidem? Quisquam, quasi officia.'
  }
] as const;

export default peopleSaidData;
