import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [selectedPlace, setSelectedPlace] = useState(null); // State for selected place

  const places = [
    {
      uri: 'https://kampatour.com/pic/blog/images/ks1.jpg&#39;,
      title: 'Koh Samui',
      subtitle: 'Thailand',
      description: 'Koh Samui is a tropical paradise renowned for its stunning beaches and vibrant nightlife. The island is dotted with luxury resorts, making it a favorite destination for relaxation and adventure alike. Visitors can explore lush rainforests, indulge in wellness retreats, and enjoy water sports like snorkeling and diving in crystal-clear waters.'
    },
    {
      uri: 'https://destinationlesstravel.com/wp-content/uploads/2022/08/Cottesloe-Beach-Perth.jpg.webp&#39;,
      title: 'Perth',
      subtitle: 'Australia',
      description: 'Perth is a captivating city known for its stunning beaches and rich cultural scene. Surrounded by natural beauty, it offers visitors a vibrant arts district, parks, and riverfront areas. Explore Cottesloe Beach, enjoy a sunset by the Swan River, or immerse yourself in local markets showcasing Perth\'s diverse food culture.'
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9DcB8zPWS3cmvIMXvoszHQIuzsNfs0oZEQ&s&#39;,
      title: 'Santorini',
      subtitle: 'Greece',
      description: 'Famous for its iconic whitewashed buildings and breathtaking sunsets, Santorini is a must-visit destination in Greece. The island boasts beautiful beaches, ancient ruins, and exquisite local wines. Experience the unique charm of its villages, dine at cliffside restaurants, and explore volcanic landscapes that make Santorini truly one-of-a-kind.'
    },
    {
      uri: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&#39;,
      title: 'Maldives',
      subtitle: 'Maldives',
      description: 'The Maldives is a tropical paradise known for its crystal-clear waters and stunning coral reefs. Ideal for beach lovers and adventure seekers, it offers unparalleled opportunities for snorkeling, diving, and relaxation. With luxurious resorts on private islands, visitors can enjoy spa treatments, water sports, and exquisite dining experiences surrounded by breathtaking natural beauty.'
    },
    {
      uri: 'https://www.thehotelguru.com/_images/ec/28/ec288f19a19cc224a347fb968caad691/the-mulia-s1180x560.jpg&#39;,
      title: 'Bali',
      subtitle: 'Indonesia',
      description: 'Bali is an enchanting island known for its diverse landscapes, from volcanic mountains to lush rice paddies. Rich in culture, Bali offers a unique blend of traditional ceremonies, vibrant arts, and breathtaking temples. Explore its famous beaches, indulge in wellness retreats, and experience the warm hospitality of its locals.'
    },
    {
      uri: 'https://www.annees-de-pelerinage.com/wp-content/uploads/2017/01/akihabara-district-tokyo-japan-643x429.jpg&#39;,
      title: 'Tokyo',
      subtitle: 'Japan',
      description: 'Tokyo is a bustling metropolis that seamlessly blends tradition and modernity. With its towering skyscrapers, historic temples, and vibrant neighborhoods, there is always something for everyone. Experience the dynamic street life in Shibuya, savor delicious street food in Tsukiji, and explore the serene gardens and shrines that offer a peaceful retreat from the city\'s hustle.'
    },
    {
      uri: 'https://assets-news.housing.com/news/wp-content/uploads/2022/08/29001523/Seoul-4.jpg&#39;,
      title: 'Seoul',
      subtitle: 'Korea',
      description: 'Seoul is a vibrant city known for its rich history and cutting-edge technology. Visitors can explore ancient palaces and traditional markets while enjoying a lively nightlife scene. From the stunning views at N Seoul Tower to the cultural treasures in Bukchon Hanok Village, Seoul offers a unique blend of the old and the new, making it a must-visit destination.'
    },
    {
      uri: 'http://travel.philippinecentral.com/wp-content/uploads/2014/06/boracay_sand_castle.jpg&#39;,
      title: 'Boracay',
      subtitle: 'Philippines',
      description: 'Boracay is famous for its powdery white sand beaches and crystal-clear waters. This small island is a tropical haven for beach lovers, offering an array of water sports, vibrant nightlife, and stunning sunsets. Whether you want to relax on the beach, try your hand at windsurfing, or indulge in local cuisine, Boracay has something for everyone.'
    },
    {
      uri: 'https://cdn.britannica.com/95/96095-050-3983BE03/Skyline-Cumberland-River-Nashville.jpg&#39;,
      title: 'Nashville',
      subtitle: 'USA',
      description: 'Known as the "Music City," Nashville is a cultural hub famous for its country music scene. With live music pouring out of honky-tonks and vibrant festivals, the city is a haven for music lovers. Beyond its musical legacy, Nashville boasts delicious Southern cuisine, historic landmarks, and a lively arts scene, making it a diverse destination worth exploring.'
    },
  ];

  const handlePlacePress = (place) => {
    setSelectedPlace(place); // Set the selected place
  };

  const handleBackPress = () => {
    setSelectedPlace(null); // Clear the selected place
  };

  if (selectedPlace) {
    // Render details if a place is selected
    return (
      <View style={styles.detailsContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>Details</Text>
        </TouchableOpacity>
        <Image source={{ uri: selectedPlace.uri }} style={styles.image} />
        <Text style={styles.title}>{selectedPlace.title}</Text>
        <Text style={styles.subtitle}>{selectedPlace.subtitle}</Text>
        <Text style={styles.description}>{selectedPlace.description}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Find your perfect place to travel.</Text>
        </View>
        <TouchableOpacity style={styles.profileIconContainer}>
          <FontAwesome name="user-circle" size={35} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Most Popular Places */}
      <Text style={styles.subheading}>Most popular places</Text>
      <ScrollView style={styles.scrollView}>
        {Array.from({ length: Math.ceil(places.length / 2) }).map((_, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {places.slice(rowIndex * 2, rowIndex * 2 + 2).map((place, index) => (
              <TouchableOpacity
                style={styles.card}
                key={index}
                onPress={() => handlePlacePress(place)} // Navigate to place details
              >
                <Image source={{ uri: place.uri }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{place.title}</Text>
                <Text style={styles.cardSubtitle}>{place.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <FontAwesome name="home" size={25} color="#007BFF" />
        <FontAwesome name="suitcase" size={25} color="#007BFF" />
        <FontAwesome name="bookmark" size={25} color="#007BFF" />
        <FontAwesome name="user" size={25} color="#007BFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#007BFF', // Background color for the header
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIconContainer: {
    marginLeft: 10,
  },
  searchContainer: {
    marginBottom: 15,
  },
  searchBar: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#6c757d',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'justify',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
});
