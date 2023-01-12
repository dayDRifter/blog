async function createPosts(){
    const postsElement=document.getElementById('posts');
    const response=await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('response',response);
    const data=await response.json();
    console.log('data',data);
    for(let i=0;i<data.length;i++)
    {
        //create the required element

        const divElement =document.createElement('div');
        const titleElement=document.createElement('p');
        const bodyElement=document.createElement('p');
        const byElement=document.createElement('p');
        const deletePostElement=document.createElement('p');

        //add event listener to on deletePostElement to delete it
        deletePostElement.addEventListener('click',function(){
            postsElement.removeChild(divElement);
        })

        //add the content for each element
        titleElement.innerHTML=data[i].title;
        bodyElement.innerHTML=data[i].body;
        byElement.innerHTML=`by ${data[i].id}`
        deletePostElement.innerHTML='X';


        //add the css to each element
       titleElement.classList.add('title');
       bodyElement.classList.add('body');
       byElement.classList.add('by');
       deletePostElement.classList.add('deleteButton');
       divElement.classList.add('post');

       //add all other elements as child for divElement
       divElement.appendChild(titleElement);
       divElement.appendChild(bodyElement);
       divElement.appendChild(byElement);
       divElement.appendChild(deletePostElement);

       //add divElement as a child for postsElement
       postsElement.appendChild(divElement);

    }
}

createPosts();