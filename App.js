import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, StatusBar, ScrollView, Image, Button } from 'react-native';
import { Block,Text,Icon} from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Activity from './src/pages/Activity.page';
import Follow from './src/pages/Follow.page';

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

class App extends Component {
  render() {
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
                <Block flex={0.6} style={{marginTop: 60}}><Text h4 style={{color: '#ffffff'}}>Dashboard</Text></Block>
                <Block flex={0.4} style={{marginTop: 55}} right><Image source={{ uri: 'http://i.pravatar.cc/100?id=skater' }} style={styles.avatar}></Image></Block>
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
                <Text h5 style={{color:theme.COLORS.PRIMARY}}>สรุปบัญชี</Text>
                <Text h5 style={{color:theme.COLORS.TEXT, marginTop: 10}}>฿6,000,000.00</Text>
              </Block>
              <Block flex={0.3} middle>
                <Block flex row middle style={{width: '50%'}}>
                  <Icon name="local-atm" family="MaterialIcons" color={'#29b998'}/>
                  <Text style={{flex:1, fontWeight: 'bold', lineHeight: 20, color: theme.COLORS.TEXT2}}>  ยอดเงินคงเหลือ</Text>
                  <Text style={{fontWeight: 'bold', lineHeight: 20, color: theme.COLORS.TEXT2}}>60%</Text>
                </Block>
                <Block flex row middle style={{width: '50%'}}>
                  <Icon name="money-off" family="MaterialIcons" color={'#f6646d'}/>
                  <Text style={{flex:1, fontWeight: 'bold', lineHeight: 20, color: theme.COLORS.TEXT2}}>  ยอดเงินคงเหลือ</Text>
                  <Text style={{fontWeight: 'bold', lineHeight: 20, color: theme.COLORS.TEXT2}}>40%</Text>
                </Block>
              </Block>
            </Block>
          </Block>
          
          <Block style={styles.body}>
            
            <Block flex row middle style={styles.boxHeader}>
              <Block><Icon flex name="more-vert" family="MaterialIcons" size={24} color={theme.COLORS.PRIMARY} /></Block>
              <Block flex><Text h5 style={styles.textHeader}>ผลงานและอื่นๆ</Text></Block>  
            </Block>
            <Block flex row  style={{marginTop:10}}>
              <Block flex middle style={styles.tile} >
                <Icon name="developer-board" family="MaterialIcons" color={theme.COLORS.ICON} size={theme.SIZES.ICON} onPress={()=> this.props.navigation.navigate('Activity')}/>
                <Text style={styles.tileText}>กิจกรรม/โครงการ</Text>
              </Block>
              <Block flex middle style={styles.tile}> 
                <Icon name="event-available" family="MaterialIcons" color={theme.COLORS.ICON} size={theme.SIZES.ICON} onPress={()=> this.props.navigation.navigate('Follow')} />
                <Text style={styles.tileText}>ติดตามผลงาน</Text>
              </Block>
              <Block flex middle style={styles.tile}> 
                <Icon name="add-to-queue" family="MaterialIcons" color={theme.COLORS.ICON} size={theme.SIZES.ICON} />
                <Text style={styles.tileText}>รายการรายได้</Text>
              </Block>
            </Block>
            <Block flex row>
              <Block flex middle style={styles.tile}> 
                <Icon name="remove-from-queue" family="MaterialIcons" color={theme.COLORS.ICON} size={theme.SIZES.ICON} />
                <Text style={styles.tileText}>รายการเบิกจ่าย</Text>
              </Block>
              <Block flex middle style={styles.tile}> 
                <Icon name="business" family="MaterialIcons" color={theme.COLORS.ICON} size={theme.SIZES.ICON} />
                <Text style={styles.tileText}>แผนที่อาคาร</Text>
              </Block>
              <Block flex middle style={styles.tile}></Block>
            </Block>

            <Block flex row middle style={styles.boxHeader}>
              <Block><Icon flex name="more-vert" family="MaterialIcons" size={24} color={theme.COLORS.PRIMARY} /></Block>
              <Block flex><Text h5 style={styles.textHeader}>สรุปรายงาน</Text></Block>  
            </Block>
            
            <Block
              card={true}
              borderless={true}
              style={[styles.cardList, {marginTop:20}]}
              shadow={true}
              shadowColor={theme.COLORS.SHADOW}
              flex
              row
              middle
            >
              <Block middle style={[styles.circleIconBG, {backgroundColor: '#29b998'}]}>
                <Icon name="local-atm" family="MaterialIcons" color={theme.COLORS.WHITE} size={theme.SIZES.CIRCLE_ICON} />
              </Block>
              <Block flex style={{marginLeft: 10, marginRight: 10}}>
                <Text style={styles.cardListTitle}>ยอดเงินบริจาค</Text>
                <Text style={styles.cardListDetail}>฿10,000,000.00</Text>
              </Block>
              <Block><Text>         </Text></Block>
            </Block>
            <Block
              card={true}
              borderless={true}
              style={styles.cardList}
              shadow={true}
              shadowColor={theme.COLORS.SHADOW}
              flex
              row
              middle
            >
              <Block middle style={[styles.circleIconBG, {backgroundColor: '#f6646d'}]}>
                <Icon name="money-off" family="MaterialIcons" color={theme.COLORS.WHITE} size={theme.SIZES.CIRCLE_ICON} />
              </Block>
              <Block flex style={{marginLeft: 10, marginRight: 10}}>
                <Text style={styles.cardListTitle}>ยอดเงินเบิกจ่าย</Text>
                <Text style={styles.cardListDetail}>฿4,000,000.00</Text>
              </Block>
              <Block><Text>         </Text></Block>
            </Block>
            <Block
              card={true}
              borderless={true}
              style={styles.cardList}
              shadow={true}
              shadowColor={theme.COLORS.SHADOW}
              flex
              row
              middle
            >
              <Block middle style={[styles.circleIconBG, {backgroundColor: '#1494da'}]}>
                <Icon name="people" family="MaterialIcons" color={theme.COLORS.WHITE} size={theme.SIZES.CIRCLE_ICON} />
              </Block>
              <Block flex style={{marginLeft: 10, marginRight: 10}}>
                <Text style={styles.cardListTitle}>ยอดผู้เดือดร้อน</Text>
                <Text style={styles.cardListDetail}>530,069 ราย</Text>
              </Block>
              <Block><Text>         </Text></Block>
            </Block>
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
    fontWeight: 'bold'
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


const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      header: null,
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      header: null,
    }
  },
  Follow: {
    screen: Follow,
    navigationOptions: {
      header: null,
    }
  },
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

