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

export default class Activity extends Component {
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
                <Block flex={0.1} style={{marginTop: 63}}><Icon name="chevron-left" family="MaterialIcons" size={40} color={'white'} onPress={() => this.props.navigation.goBack()}/></Block>
                <Block flex={0.7} style={{marginTop: 60}}><Text h4 style={{color: '#ffffff'}}>ติดตามผลงาน</Text></Block>
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
              row
            >
              <Block flex={1} middle style={{borderRightWidth: 1, borderColor: '#ddd'}}>
                <Text style={{color:theme.COLORS.PRIMARY, fontSize: 18, fontWeight: 'bold'}}>ทุนที่รอการอนุมัติ</Text>
                <Text style={{color:theme.COLORS.PRIMARY, fontSize: 24, fontWeight: 'bold', color: '#f6646d', marginTop: 30}}>6,540</Text>
              </Block>
              <Block flex={1} middle>
                <Text style={{color:theme.COLORS.PRIMARY, fontSize: 18, fontWeight: 'bold'}}>ผู้รอการช่วยเหลือ</Text>
                <Text style={{color:theme.COLORS.PRIMARY, fontSize: 24, fontWeight: 'bold', color: '#f6646d', marginTop: 30}}>75,863</Text>
              </Block>
            </Block>
          </Block>
          
          <Block style={styles.body}>
            <Block flex row middle style={styles.boxHeader}>
              <Block><Icon flex name="more-vert" family="MaterialIcons" size={24} color={theme.COLORS.PRIMARY} /></Block>
              <Block flex><Text h5 style={styles.textHeader}>ทุนการศึกษา</Text></Block>  
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
                <Text style={styles.cardListTitle}>รายการขอทุนการศึกษาทั้งหมด</Text>
                <Text style={styles.cardListDetail}>25,431 ทุน</Text>
              </Block>
            </Block>
            <Block flex row space="between">
              <Block style={styles.cardColumn} card={true} borderless={true} shadow={true} shadowColor={theme.COLORS.SHADOW}>
                <Text style={styles.cardListTitle}>อนุมัติแล้ว</Text>
                <Text style={[styles.cardListDetail, {color: '#29b998'}]}>18,891</Text>
              </Block>
              <Block style={styles.cardColumn} card={true} borderless={true} shadow={true} shadowColor={theme.COLORS.SHADOW}>
              <Text style={styles.cardListTitle}>รออนุมัติ</Text>
                <Text style={[styles.cardListDetail, {color: '#f6646d'}]}>6,540</Text>
              </Block>
            </Block>

            <Block flex row middle style={styles.boxHeader}>
              <Block><Icon flex name="more-vert" family="MaterialIcons" size={24} color={theme.COLORS.PRIMARY} /></Block>
              <Block flex><Text h5 style={styles.textHeader}>ผู้เดือดร้อน</Text></Block>  
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
              <Block middle style={[styles.circleIconBG, {backgroundColor: '#1494da'}]}>
                <Icon name="people" family="MaterialIcons" color={theme.COLORS.WHITE} size={theme.SIZES.CIRCLE_ICON} />
              </Block>
              <Block flex style={{marginLeft: 10, marginRight: 10}}>
                <Text style={styles.cardListTitle}>ยอดผู้เดือดร้อน</Text>
                <Text style={styles.cardListDetail}>489,546 ราย</Text>
              </Block>
            </Block>
            <Block flex row space="between">
              <Block style={styles.cardColumn} card={true} borderless={true} shadow={true} shadowColor={theme.COLORS.SHADOW}>
                <Text style={styles.cardListTitle}>อนุมัติแล้ว</Text>
                <Text style={[styles.cardListDetail, {color: '#29b998'}]}>413,683</Text>
              </Block>
              <Block style={styles.cardColumn} card={true} borderless={true} shadow={true} shadowColor={theme.COLORS.SHADOW}>
              <Text style={styles.cardListTitle}>รออนุมัติ</Text>
                <Text style={[styles.cardListDetail, {color: '#f6646d'}]}>75,863</Text>
              </Block>
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
  cardColumn: {
    borderWidth: 0,
    height: 80,
    padding: theme.SIZES.BASE * 0.75,
    backgroundColor: theme.COLORS.WHITE,
    width: (screenWidth/2) - (theme.SIZES.BASE * 1.3),
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
