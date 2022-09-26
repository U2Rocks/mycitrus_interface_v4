import { useState, useEffect } from 'react'
import { fillerText } from '../data/dataList4'

// this hook will get article data from a master state that is filled in when the app loads
// load app -> hook triggered -> state is filled in with query info
// click on article -> hook gets information from state object to fill out article -> info fills page via props

// temporary static list for testing base articles
const testArticleList = 
[{id: 1, title: "Ukraine's Advance into Russia Stalled by intense resistance and new stories of disaster from frontlines", Date: "9/08/22", articleText: fillerText}, 
{id: 2, title: "Man Found Dead on Pavement", Date: "9/09/22", articleText: fillerText}, 
{id: 3, title: "Man Found Dead on Building", Date: "9/10/22", articleText: fillerText}, 
{id: 4, title: "Man Found Dead on Tram Station", Date: "9/11/22", articleText: fillerText},
{id: 5, title: "Man Found Dead at Bus Stop", Date: "9/12/22", articleText: fillerText},
{id: 6, title: "Man Found Dead at Burger King", Date: "9/13/22", articleText: fillerText},
{id: 7, title: "Man Found Alive at McDonalds", Date: "9/14/22", articleText: fillerText},
{id: 8, title: "Man Driving Car in Alabama", Date: "9/15/22", articleText: fillerText},
]

// temporary static list for testing top stories
const testBigArticleList = [
    {id: 1, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 2, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 3, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 4, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 5, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
]

export default function useArticles() {
    const [errorMsg, setErrorMsg] = useState("")
    const [currentArticleInfo, setCurrentArticleInfo] = useState({})

    // function that fetches data to populate currentArticleInfo
    async function fetchData(){
        console.log("useArticles loaded")
        setCurrentArticleInfo({
            articleList: testArticleList,
            bigArticleList: testBigArticleList
        })
        console.log('useArticles has triggered: ', currentArticleInfo)
    }

    // use effect that triggers function call to fetch data
    useEffect(() => {
        fetchData()
    }, [])

    function getArticleInfo(articleTitle){
        // this function will updated the article info to new information based on input
    }

    return [currentArticleInfo, getArticleInfo, errorMsg]
}