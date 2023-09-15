import React, { useEffect, useMemo } from "react";
import { FeedInfo } from '../@types/FeedInfo';
import { FlatList, View, useWindowDimensions } from "react-native";
import { Header } from "../components/Header/Header";
import { useMyFeedList } from "../selectors/user";
import { Button } from "../components/Button";
import { RemoteImage } from "../components/RemoteImage";
import { useRootNavigation } from "../navigations/RootStacknavigation";
import { useDispatch } from "react-redux";
import { TypeUserDispatch, getMyFeedList } from "../actions/user";

export const MyPageScreen:React.FC =()=>{
    const data =useMyFeedList();
    const rootNavigation = useRootNavigation();
    const dispatch = useDispatch<TypeUserDispatch>();
    const { width } = useWindowDimensions();
    const photoSize = useMemo(()=>{
        return width / 3
    }, [width])

    useEffect(()=>{
        dispatch(getMyFeedList());
    }, [])
    return(
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title="MY PAGE"></Header.Title>
            </Header>
            <FlatList<FeedInfo>
                data={data}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <Button onPress={()=>{
                            rootNavigation.navigate('FeedList', {list:data})
                        }}>
                            <RemoteImage url={ item.imageUrl } width={ photoSize } height={ photoSize } />
                        </Button>
                    )
                }}
            />
        </View>
    )
}