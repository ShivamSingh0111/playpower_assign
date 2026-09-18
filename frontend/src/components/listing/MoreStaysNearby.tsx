import React from 'react';
import styles from './MoreStaysNearby.module.css';
import { StarIcon } from '../common/Icons';

interface StayCard {
  id: string;
  image: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  dates: string;
}

const NEARBY_STAYS: StayCard[] = [
  {
    id: 'stay-1',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    title: 'Luxury Villa with Private Pool',
    location: 'Candolim, India',
    rating: 4.96,
    price: '₹7,200',
    dates: '18–23 Oct'
  },
  {
    id: 'stay-2',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
    title: 'Boho Chic 1BHK near Beach',
    location: 'Calangute, India',
    rating: 4.92,
    price: '₹4,800',
    dates: '18–23 Oct'
  },
  {
    id: 'stay-3',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
    title: 'Tropical Suite with Jacuzzi',
    location: 'Candolim, India',
    rating: 4.98,
    price: '₹6,100',
    dates: '18–23 Oct'
  },
  {
    id: 'stay-4',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
    title: 'Modern Portuguese Haven',
    location: 'Sinquerim, India',
    rating: 4.94,
    price: '₹5,500',
    dates: '18–23 Oct'
  },
  {
    id: 'stay-5',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    title: 'Cozy Coastal Studio',
    location: 'Candolim, India',
    rating: 4.89,
    price: '₹3,900',
    dates: '18–23 Oct'
  }
];

export const MoreStaysNearby: React.FC = () => {
  return (
    <section className={styles.section} aria-label="More stays nearby">
      <h3 className={styles.heading}>More stays nearby</h3>
      <div className={styles.carousel}>
        {NEARBY_STAYS.map((stay) => (
          <div key={stay.id} className={styles.stayCard}>
            <div className={styles.imageWrapper}>
              <img src={stay.image} alt={stay.title} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.titleRow}>
                <span className={styles.title}>{stay.location}</span>
                <div className={styles.rating}>
                  <StarIcon size={12} filled color="#222" />
                  <span>{stay.rating}</span>
                </div>
              </div>
              <div className={styles.desc}>{stay.title}</div>
              <div className={styles.dates}>{stay.dates}</div>
              <div className={styles.price}>
                <strong>{stay.price}</strong> night
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
