import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const COMMENT_DATA = [
    { id: '1', text: 'Great job on the project!' },
    { id: '2', text: 'I think we should consider adding more features.' },
    { id: '3', text: 'Miku Miku ooo-eee-oo.' },
    { id: '4', text: 'Is this thing working?' },
    { id: '5', text: 'EXCALBUUUUR!' },
    { id: '6', text: 'What is this?' },
  ]
  
  const renderCommentItem = ({ item }: { item: { id: string, text: string } }) => (
    <View style={styles.CommentBox}>
      <Text>{item.text}</Text>
    </View>
  );

  type ItemData = {
    id: string;
    title: string;
  };

  const DATA: ItemData[] = [
    { id: '1', title: 'Item_1' },
    { id: '2', title: 'Item_2' },
    { id: '3', title: 'Item_3' },
    { id: '4', title: 'Item_4' },
    { id: '5', title: 'Item_5' },
    { id: '6', title: 'Item_6' },
    { id: '7', title: 'Item_7' },
    { id: '8', title: 'Item_8' },
    { id: '9', title: 'Item_9' },
  ]

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };

  const Item = ({item, onPress, backgroundColor}: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.ProjectBox, {backgroundColor}]}>
      <Text style={[styles.title, {color: "#fff"}]}>{item.title}</Text>
    </TouchableOpacity>
  );
  
  const [selectedId, setSelectedId] = useState<string>();

  
  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#2d2c2d' : '#000';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };


  // Keeps track of which tab is active ('Your Projects' or 'Shared Projects') and updates the UI accordingly. This state is used to conditionally render the content of each tab.
  const [activeTab, setActiveTab] = useState('Your Projects');
  

  const pieData = [
    {value: 40, color: '#11e662', text: 'Tasks Completed'},
    {value: 20, color: '#ED6665', text: 'Tasks Not Completed'},
  ];
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}> 
        <Image 
          source={require("../../../assets/images/myumbclogo.png")} 
          style={styles.image} 
        />
        <Text style={styles.title}>UMBC Project Dashboard</Text>
      </View>

      
      <View style={styles.SideBarBox}>
        <View style={styles.TaskContainer}>
          <Text style={styles.BoxTitle}>Tasks</Text>
          
          <PieChart
            data={pieData}
            donut
            radius={75}
            innerRadius={50}
          />

          <View style={styles.legendContainer}>
            {pieData.map((item, index) => (
              <View key={index} style={styles.legendItem} >
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: item.color,
                    marginRight: 10,
                  }}
                />
                <Text style={styles.legendText}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>


        <View style={styles.CommentContainer}>
          <Text style={styles.BoxTitle}>Comments</Text>
          <FlatList
            data={COMMENT_DATA}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id}
            scrollEnabled={true}
          />
        </View>
      </View>


      

      <View style={styles.ProjectContainer}>
        <Text style={styles.ProjectTitle}>Projects</Text>
      <View style={styles.tabBar}>
          <TouchableOpacity 
            onPress={() => setActiveTab('Your Projects')}
            style={[styles.tabButton, activeTab === 'Your Projects' && styles.activeTabButton]}
          >
            <Text style={[styles.tabText, activeTab === 'Your Projects' && styles.activeTabText]}>
              Your Projects
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setActiveTab('Shared Projects')}
            style={[styles.tabButton, activeTab === 'Shared Projects' && styles.activeTabButton]}
          >
            <Text style={[styles.tabText, activeTab === 'Shared Projects' && styles.activeTabText]}>
              Shared Projects
            </Text>
          </TouchableOpacity>

        </View>

        {activeTab === 'Your Projects' ? (
          /* Render your projects list view here */
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          /> 
        ) : (
          /* Render your shared projects list view here */
          <Text style={styles.placeholderText}>Showing Shared Projects Data...</Text>
        )}  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#f8f9fa",
  },
  image: {
    position: "absolute",
    top: "0%",
    left: "2%",
    width: 150,
    height: "100%",
    resizeMode: 'center', // Options: 'cover', 'contain', 'stretch', 'repeat', 'center'
  },
  header: {
    flex: 0,
    alignItems: 'center',
    justifyContent: "center",
   
    position: "absolute",
    top: "0%",
    width: "100%",
    height: "8%",

    backgroundColor: "#020202",
    borderColor: "#fdb515",
    borderStyle: "solid",
    borderBottomWidth: 4,
  },
  title: {
    color: "#fbfbf8",
    fontSize: 24,
    fontWeight: "bold",
  },
  BoxTitle: {
    position: "absolute",
    top: "5%",
    left: "5%",
    marginBottom: 20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
  },
  
  SideBarBox: {
    position: "absolute",
    right: "5%",
    top: "20%",
    
    width: "24%",
    height: "75%",
    //backgroundColor: "#b62626",

    alignItems: "stretch",
    justifyContent: "center",
    paddingVertical: 20,
    flexShrink: 0,
    flexGrow: 0,
    minHeight: 500, // Ensures the container has a minimum height for better layout
    minWidth: 200,  // Ensures the container has a minimum width for better layout

  },


  
  CommentContainer: {
    marginBottom: "20%",
    width: "100%",
    height: "45%",

    backgroundColor: "transparent",
    borderColor: "#d7d9dd",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,

    // Soft drop shadow styling for mobile
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
    elevation: 2,
    
    alignItems: 'stretch',
    justifyContent: "space-evenly",
    paddingTop: 50,

  },
  CommentBox: {
    width: "95%",

    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "transparent",
    borderColor: "#d8d7d7",
    borderStyle: "solid",

    // Applies line to the bottom only, separating items natively
    borderBottomWidth: 2,
  },


  TaskContainer: {
    top: 20,
    marginTop: "15%",
    marginBottom: "37%",
    width: "100%",
    height: "45%",

    backgroundColor: "transparent",
    borderColor: "#d7d9dd",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,

    // Soft drop shadow styling for mobile
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
    elevation: 2,      

    alignItems: 'center',
    justifyContent: "center",
    paddingTop: -15,
    paddingRight: 20,

  },

  

  legendContainer: {
    position: "absolute",
    bottom: "2%",
    right: "2%",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    color: '#000',
    fontSize: 14,
  },




  ProjectTitle: {
    position: "absolute",
    top: "2%",
    left: "5%",
    marginBottom: 20,
    color: "#000",
    fontSize: 33,
    fontWeight: "bold",
  },
  ProjectContainer: {
    position: "absolute",
    top: "20%",
    right: "45%",
    
    alignItems: 'stretch',
    justifyContent: "space-evenly",
    paddingTop: 70,
    
    width: "50%",
    height: "75%",

    backgroundColor: "transparent",
    borderColor: "#d7d9dd",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,

    // Soft drop shadow styling for mobile
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
    elevation: 2,      
    
    flexShrink: 0,
    flexGrow: 0,
    minHeight: 500, // Ensures the container has a minimum height for better layout
    minWidth: 700,  // Ensures the container has a minimum width for better layout

  },
  ProjectBox: {
    width: "95%",
    height: 60,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: "center",

    backgroundColor: "transparent",
    borderColor: "#fdb515",
    borderStyle: "solid",
    borderRadius: 4,
    borderWidth: 4,
    // borderBottomWidth: 4,
    // Apply borderRadius to the Card to give it round corners
  },



   tabBar: {
    position: "absolute",
    top: "5%",
    left: "25%",

    flexDirection: 'row',
    marginBottom: 16,
    gap: 24,
  },
  tabButton: {
    paddingBottom: 8,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent', // Invisible line when inactive
  },
  activeTabButton: {
    borderBottomColor: '#fdb515', // Solid black line indicator when active
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9e9e9e', // Faded gray for inactive text
  },
  activeTabText: {
    color: '#000000', // Bold black text for active state
  },
  placeholderText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: 'center',
    marginTop: "28%",
    color: '#333',
    fontSize: 14,
  }
});