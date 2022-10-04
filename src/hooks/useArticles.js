import { useState, useEffect } from 'react'
import { fillerText } from '../data/dataList4'

// this hook will get article data from a master state that is filled in when the app loads
// load app -> hook triggered -> state is filled in with query info
// click on article -> hook gets information from state object to fill out article -> info fills page via props

// temporary static list for testing base articles
const testArticleList = 
[{id: 1, title: "Ukraine's Advance into Russia Stalled by intense resistance and new stories of disaster from frontlines", Date: "9/08/22", articleText: fillerText}, 
{id: 2, title: "Man Found Dead on Kosovo", Date: "9/09/22", articleText: fillerText}, 
{id: 3, title: "Man Found Dead on Building", Date: "9/10/22", articleText: fillerText}, 
{id: 4, title: "Man Found Dead on Tram Station", Date: "9/11/22", articleText: fillerText},
{id: 5, title: "Man Found Dead at Bus Stop", Date: "9/12/22", articleText: fillerText},
{id: 6, title: "Man Found Dead at Burger King", Date: "9/13/22", articleText: fillerText},
{id: 7, title: "Man Found Alive at McDonalds", Date: "9/14/22", articleText: fillerText},
{id: 8, title: "Man Driving Car in Alabama", Date: "9/15/22", articleText: fillerText},
]

// temporary static list for testing top stories
const testBigArticleList = [
    {id: 1, title: "Serbia has declared war on Kosovo and Bosnia and even LESS", date: "08/11/22", articleText: fillerText},
    {id: 2, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 3, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 4, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
    {id: 5, title: "Serbia has declared war on Kosovo and Bosnia and even more action", date: "08/11/22", articleText: fillerText},
]

export default function useArticles() {
    const [errorMsg, setErrorMsg] = useState("")
    const [currentArticleInfo, setCurrentArticleInfo] = useState({
        articleList: null,
        bigArticleList: null
    })

    // function that fetches data to populate currentArticleInfo
    async function fetchData(){
        console.log("FetchData Start: useArticles loaded")
        await setCurrentArticleInfo({
            articleList: testArticleList,
            bigArticleList: testBigArticleList
        })
        console.log('FetchData End: useArticles has finished')
    }

    // use effect that triggers function call to fetch data
    useEffect(() => {
        console.log("@@@@@<---useArticle useEffect triggered--->@@@@@")
        fetchData()
    }, [])

    // function that grabs info for recent headlines
    function getArticleInfo(articleTitle, articleId){
        console.log('currentArticleInfo state(top of getArticleInfo): ', currentArticleInfo)
        if (currentArticleInfo['articleList'] === null) return
        let smallFuncList = currentArticleInfo.articleList
        let funcList = smallFuncList.filter((item) => item.id === articleId)
        console.log('<--------------Result of filter: ', funcList)
        return funcList
    }
    
    // function that grabs info for top stories
    function getBigArticleInfo(articleTitle, articleId){
        console.log('currentArticleInfo state(top of getBigArticleInfo): ', currentArticleInfo)
        let bigFuncList = currentArticleInfo.bigArticleList
        if (currentArticleInfo['bigArticleList'] === null) return
        let funcList = bigFuncList.filter((item) => item.id === articleId)
        console.log('<--------------Result of filter: ', funcList)
        return funcList
    }

    return [currentArticleInfo, getArticleInfo, getBigArticleInfo, errorMsg]
}