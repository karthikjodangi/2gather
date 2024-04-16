import React from 'react';
import { useParams } from 'react-router-dom';

import hikeImg from '../Images/hikinggroup.jpg'
import cookImg from '../Images/cooking-class.jpg'
import yogaImg from '../Images/yoga-retreat.webp'
import concertImg from '../Images/concert.jpg'
import meditationImg from '../Images/meditation.jpg'
import paintingImg from '../Images/painting.jpg'
import photographyImg from '../Images/photography.jpg'
import rockClimibingaImg from '../Images/rockClimibing.jpg'
import salsaImg from '../Images/salsa.jpg'
import scubaDivingImg from '../Images/scubaDiving.jpg'

const Activities = () => {
  const { selectedCategory } = useParams();

  const activities = [
    {
      id: 1,
      title: 'Hiking Expedition',
      description: 'Explore scenic trails and breathtaking views of nature. Breathe in the fresh air and experience the serenity of the wilderness.',
      imageUrl: hikeImg,
      categories: ['save-nature', 'travel-outdoor']
    },
    {
      id: 2,
      title: 'Cooking Class',
      description: 'Learn to cook authentic and delicious dishes from around the world under the guidance of professional chefs. Discover new flavors and techniques.',
      imageUrl: cookImg,
      categories: ['be-productive', 'have-fun']
    },
    {
      id: 3,
      title: 'Yoga Retreat',
      description: 'Rejuvenate your mind, body, and soul with daily yoga sessions, meditation, and holistic wellness activities in a serene retreat center. Find inner peace and balance.',
      imageUrl: yogaImg,
      categories: ['be-productive', 'have-fun']
    },
    {
      id: 4,
      title: 'Painting Workshop',
      description: 'Unleash your creativity and learn different painting techniques under the guidance of experienced artists. Express yourself through art and discover your inner artist.',
      imageUrl: paintingImg,
      categories: ['be-productive', 'have-fun']
    },
    {
      id: 5,
      title: 'Scuba Diving',
      description: 'Explore the mesmerizing underwater world, swim with colorful fishes, and discover hidden treasures. Experience the thrill of adventure beneath the waves.',
      imageUrl: scubaDivingImg,
      categories: ['get-sportive', 'travel-outdoor']
    },
    {
      id: 6,
      title: 'Photography Tour',
      description: 'Capture stunning landscapes, wildlife, and cultural heritage with the guidance of professional photographers. Learn photography techniques and unleash your creativity.',
      imageUrl: photographyImg,
      categories: ['get-sportive', 'travel-outdoor']
    },
    {
      id: 7,
      title: 'Concert in the Park',
      description: 'Enjoy live music performances by talented artists in the open air of a beautiful park. Experience the magic of music surrounded by nature.',
      imageUrl: concertImg,
      categories: ['have-fun', 'travel-outdoor']
    },
    {
      id: 8,
      title: 'Salsa Dance Class',
      description: 'Learn the rhythmic moves of salsa dancing and spice up your evenings with energetic Latin beats. Have fun, get fit, and meet new people.',
      imageUrl: salsaImg,
      categories: ['have-fun', 'indoor']
    },
    {
      id: 9,
      title: 'Rock Climbing Adventure',
      description: 'Challenge yourself with thrilling rock climbing experiences in breathtaking natural settings. Conquer cliffs, scale peaks, and push your limits.',
      imageUrl: rockClimibingaImg,
      categories: ['get-sportive', 'travel-outdoor']
    },
    {
      id: 10,
      title: 'Meditation Retreat',
      description: 'Escape the hustle and bustle of daily life, and immerse yourself in deep meditation and relaxation. Find inner peace and rejuvenation.',
      imageUrl: meditationImg,
      categories: ['be-productive', 'indoor']
    },
  ];

  const filteredActivities = activities.filter(activity => activity.categories.includes(selectedCategory));

  return (
    <div className="row mt-4 mb-4">
      {filteredActivities.map(activity => (
        <div key={activity.id} className="col-md-4 mb-4">
          <div className="card h-100"> 
            <img src={activity.imageUrl} className="card-img-top" alt={activity.title} style={{ height: '200px', objectFit: 'cover' }} /> {/* Set fixed dimensions for the image */}
            <div className="card-body">
              <h5 className="card-title">{activity.title}</h5>
              <p className="card-text">{activity.description}</p>
              <a href={`/activity/${activity.id}`} className="btn btn-primary">Join</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Activities;