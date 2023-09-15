import React, { useCallback, useEffect } from "react";
import { FlatList, View } from "react-native";
import { Header } from "../components/Header/Header";
import { FeedListItem } from "../components/FeedListItem";
import { useTotalFeedList } from "../selectors/feed";
import { useDispatch } from "react-redux";
import { TypeFeedListDispatch, getFeedList } from "../actions/feed";
import { Spacer } from "../components/Spacer";
import { useRootNavigation } from "../navigations/RootStacknavigation";

export const HomeScreen:React.FC =()=>{
    const rootNavigation = useRootNavigation();
    const feedList = useTotalFeedList();
    const dispatch = useDispatch<TypeFeedListDispatch>();
    const onPressHome = useCallback(()=>{
        rootNavigation.navigate('AddFeed')
    },[])
    useEffect(()=>{
        dispatch(getFeedList());
    },[])
    return(
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title="HOME"></Header.Title>
                <Header.Icon iconName="add" onPress={ onPressHome }></Header.Icon>
            </Header>
            <FlatList 
                data={ feedList }
                renderItem={({item})=>{
                    return (
                        <FeedListItem
                            image={item.imageUrl}
                            comment={item.content}
                            isLiked={false}
                            likeCount={item.likeHistory.length}
                            writer={item.writer.name}
                            onPressFeed={()=>{
                                console.log('onPressFeed')
                            }}
                        />
                    )
                }}
                ItemSeparatorComponent={()=>(
                    <Spacer space={24}/>
                )}
            />
        </View>
    )
}