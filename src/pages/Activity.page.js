import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, StatusBar, ScrollView, Image, FlatList } from 'react-native';
import { Block,Text,Icon} from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Math.round(Dimensions.get('window').width);

const theme = {
  SIZES: {
    BASE: 20,
    CARD_AVATAR_WIDTH: 50,
    CARD_AVATAR_HEIGHT: 50,
    CARD_AVATAR_RADIUS: 25,
    ICON: 32,
    CIRCLE_ICON: 24
  },
  COLORS: {
    WHITE: '#ffffff',
    COVER: '#2d66a6',
    PRIMARY: '#2d6293',
    TEXT: '#407fc2',
    ICON: '#407fc2',
    TEXT2: '#555',
    SHADOW: '#000000',
  }
}

const data = [
  {
    title: 'โครงการเยี่ยมผู้ประสบภัยน้ำท่วม จังหวัดอุบลราชธานี',
    dateStr: 'วันที่ 16-20 กันยายน 2562',
    day: 16,
    month: 'Sep'
  },
  {
    title: 'โครงการเยี่ยมผู้ประสบภัยน้ำท่วม จังหวัดมหาสารคาม',
    dateStr: 'วันที่ 9-13 กันยายน 2562',
    day: 9,
    month: 'Sep'
  },
  {
    title: 'โครงการเยี่ยมผู้ประสบภัยน้ำท่วม จังหวัดกาฬสินธุ์',
    dateStr: 'วันที่ 2-6 กันยายน 2562',
    day: 2,
    month: 'Sep'
  },
  {
    title: 'โครงการเยี่ยมผู้ประสบภัยน้ำท่วม จังหวัดอขอนแก่น',
    dateStr: 'วันที่ 26-30 สิงหาคม 2562',
    day: 26,
    month: 'Aug'
  },
  {
    title: 'โครงการสำรวจผู้ที่ได้รับความเดือดร้อนและยากไร้ จังหวัดสุพรรณบุรี',
    dateStr: 'วันที่ 1-5 กรกฎาคม 2562',
    day: 1,
    month: 'Jul'
  },
  {
    title: 'โครงการเยี่ยมผู้ต้องขัง ณ เรือนจำกลางจังหวัดชุมพร',
    dateStr: 'วันที่ 1-3 กรกฎาคม 2562 2562',
    day: 1,
    month: 'Jul'
  }
]

export default class Activity extends Component {
  render() {
    const list = data.map((item,i) => {
      return (
        <Block key={'item-'+i} flex row style={{paddingTop: 12}}>
          <Block>
            <Icon name="calendar" family="font-awesome-5" size={24} style={{marginTop: 5}} color={theme.COLORS.COVER}></Icon>
            <Text style={{position:'absolute', top: 13, left:item.day < 10 ? 7 : 5, fontSize: 10, color:theme.COLORS.COVER}}>{item.day}</Text>
            <Text style={{position:'absolute', top: 30, left:2, fontSize: 10,color:theme.COLORS.COVER}}>{item.month}</Text>
          </Block>
          <Block flex style={{marginLeft: 12, borderColor: '#eee', borderBottomWidth: 1,paddingBottom: 12}}>
            <Text style={{color: theme.COLORS.PRIMARY, fontWeight:'bold'}}>{item.title}</Text>
            <Text style={{color: theme.COLORS.TEXT2}}>{item.dateStr}</Text>
          </Block>
        </Block>
      );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <LinearGradient
          colors={['#79baf9', '#4190d7', '#2d66a6']}>
            <Block 
              style={styles.header}
              shadow={true}
              shadowColor={theme.COLORS.SHADOW}
              flex
              row
              >
                <Block flex={0.1} style={{marginTop: 63}}><Icon name="chevron-left" family="MaterialIcons" size={40} color={'white'} onPress={() => this.props.navigation.goBack()}/></Block>
                <Block flex={0.7} style={{marginTop: 60}}><Text h4 style={{color: '#ffffff'}}>กิจกรรม/โครงการ</Text></Block>
                <Block flex={0.20} style={{marginTop: 55}} right><Image source={{ uri: 'http://i.pravatar.cc/100?id=skater' }} style={styles.avatar}></Image></Block>
            </Block>
          </LinearGradient>

          <Block style={styles.feature} middle={true} >
            <Block
              card={true}
              borderless={true}
              style={styles.card}
              shadow={true}
              shadowColor={theme.COLORS.SHADOW}
              flex
            >
              <Block flex={0.7}>
                <Text h5 style={{color:theme.COLORS.PRIMARY}}>สรุปกิจกรรม/โครงการ</Text>
                <Text h5 style={{color:theme.COLORS.TEXT, marginTop: 10}}>ประจำปี 2562</Text>
              </Block>
              <Block flex={0.3} middle>
                
                <Block flex row middle style={{width: '80%'}}>
                  <Text style={{fontWeight: 'bold', color: theme.COLORS.TEXT, fontSize: 40}}>129</Text>
                  <Text style={{marginTop: 20, fontWeight: 'bold', lineHeight: 20, color: theme.COLORS.TEXT2}}>  โครงการ</Text>
                </Block>
              </Block>
            </Block>
          </Block>
          
          <Block style={styles.body}>
            
            <Block flex row middle style={styles.boxHeader}>
              <Block><Icon flex name="more-vert" family="MaterialIcons" size={24} color={theme.COLORS.PRIMARY} /></Block>
              <Block flex><Text h5 style={styles.textHeader}>สรุปรายการ</Text></Block>  
            </Block>
            {list}
          </Block>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  header: {
    height: 250,
    // backgroundColor: theme.COLORS.COVER,
    padding: 20
  }, 
  body: {
    marginTop: 80, 
    padding:20
  },
  feature: {
    position: 'absolute',
    top: 140,
    left: screenWidth/2 - (screenWidth - theme.SIZES.BASE * 2)/2,
  },
  card: {
    borderWidth: 0,
    height: 180,
    padding: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    width: screenWidth - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  avatar: {
    width: theme.SIZES.CARD_AVATAR_WIDTH,
    height: theme.SIZES.CARD_AVATAR_HEIGHT,
    borderRadius: theme.SIZES.CARD_AVATAR_RADIUS,
    borderWidth: 2,
    borderColor: theme.COLORS.WHITE
  },
  cardList: {
    borderWidth: 0,
    height: 80,
    padding: theme.SIZES.BASE * 0.75,
    backgroundColor: theme.COLORS.WHITE,
    width: screenWidth - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.35,
    elevation: theme.SIZES.BASE / 2,
  },
  boxHeader: {
    marginTop: 20,
  },
  textHeader: {
    color: theme.COLORS.PRIMARY,
    fontWeight: 'bold'
  },
  tile: {
    height: 90
  },
  tileText: {
    marginTop: 10,
    color: theme.COLORS.TEXT,
    fontWeight: 'bold',
    marginBottom: 10
  },
  circleIconBG: {
    borderRadius: 24, 
    width: 48, 
    height: 48
  },
  cardListTitle: {
    color: theme.COLORS.TEXT2,
    fontWeight: 'bold'
  },
  cardListDetail: {
    marginTop: 3,
    fontSize: 20,
    color: theme.COLORS.TEXT2,
    textAlign: 'right'
  }
});
