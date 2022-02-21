import {createAction, handleActions} from "redux-actions";
import { produce } from "immer";
import {api_token, api} from "../../shared/api";

const GET_POST = "GET_POST";
const ONE_POST = "ONE_POST";





const getPost = createAction(GET_POST, (post_list) => ({post_list}));
const onePost = createAction(ONE_POST, (one_post) => ({one_post}));



const initialState = {
    list: [],
    one_post: {
        "title" : "test",
        "context" : "<p><br class='ProseMirror-trailingBreak'></p><p><br class='ProseMirror-trailingBreak'></p><p><strong>dfsdafsdafsafsadf</strong></p><h3>sdfasfdsafasdfdsfas</h3><p><em>sdfasfsafasfsafasfasf</em></p><p><br class='ProseMirror-trailingBreak'></p><p><del>sfdafsfsadfsfasfasfdsfasf</del></p>",
        "createdAt" : "2021-10-09 00:00:00",
        "commentCnt" : 23
    }
    
      
}




const getOnePostFB = (postId) => {
    return async function(dispatch, getState, {history}){
        console.log('postId !! ',postId);

        await api_token.get(`/posts/${postId}`)
        .then((res) => {

            console.log('상세피이지 res !! ', res.data);

            dispatch(onePost({
                title: res.data.title,
                context: res.data.context,
                createdAt: res.data.createdAt,
                commentCnt: res.data.commentCnt,
            }));


        }).catch((err) => {
            console.log(err);
        });

    }
}








export default handleActions (
    {
        [GET_POST]: (state, action) => produce(state, (draft)=> {

        }),

        // [ADD_POST]: (state, action) => produce(state, (draft)=> {

        // }),

        [ONE_POST] : (state, action) => produce(state, (draft)=> {
          draft.one_post = action.payload.one_post;
        }),


    }, initialState
);



const actionCreator = {
    onePost,
    getOnePostFB,
}



export {actionCreator};
