import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import { FeedInfo } from "../@types/FeedInfo";

export const useTotalFeedList = ()=> 
    useSelector<RootReducer, FeedInfo[]>((state)=> state.feedList.list)