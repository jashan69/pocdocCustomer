import React, {useEffect} from 'react'
import {View, StyleSheet, Text,  Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import * as orderAction from '../../store/action/order'
import OrderCoupon from '../component/orderCoupon'

const OrderScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const order = useSelector(x=>x.order.orders)
    console.log("Order :", order)

    const addOnDispatch = useCallback( async() => {
        
        dispatch(orderAction.fetchOrder())
        
    },[dispatch, setLoad]);

    useEffect(()=>{
        const willFocusListener = navigation.addListener('willFocus',addOnDispatch)
        console.log('Lsittttt:',listPackage)
        return()=>{
            willFocusListener.remove();
        };
    },[addOnDispatch]);

    useEffect( () => {
       
       addOnDispatch()
    },[dispatch, addOnDispatch]);

    useEffect(()=>{

        dispatch(orderAction.fetchOrder())

    },[dispatch])

    return(
        <SafeAreaView>
        
        <View style={{width:Dimensions.get('window').width, alignItems:'center'}}>
        <Text style={{fontFamily:'medium', fontSize:25}}>New Orders</Text>
            

            <FlatList
                data = {order}
                renderItem = {({item}) => {

                    return<OrderCoupon
                        list = {item}
                    />

                }}
            />

        </View>
        </SafeAreaView>
    )

}

OrderScreen.navigationOptions = navData => {

    return{
        header:()=>{

            return false

        }
    }

}

export default OrderScreen 