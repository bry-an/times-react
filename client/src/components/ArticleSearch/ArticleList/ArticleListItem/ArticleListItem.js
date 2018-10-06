import React, {Fragment} from 'react'
import moment from 'moment'
import './ArticleListItem.scss'



const ArticleListItem = props => (
    <Fragment>
    {
        (props.date.length
        ? (<tr>
        <td>{moment(props.date).format('YYYY-MM-DD')}</td>
        <td>{<a href={props.url}>{props.title}</a>}</td>
        <td>{props.subtitle}</td>
        <td><button className='save-btn' onClick={() => props.saveArticle(
            {
                title: props.title,
                date: props.date,
                url: props.url,
                subtitle: props.subtitle
            }
        )}>Save</button></td>
    </tr>
        )
        : <p>loading...</p>)
}
</Fragment>

)


export default ArticleListItem