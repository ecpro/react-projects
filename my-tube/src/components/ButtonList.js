import Button from "./Button";

const list = ['All', 'Gaming', 'Live', 'Cricket', 'Football', 'News', 'Cooking', 'Grooming', 'Tennis'];

const ButtonList = () => {
    return (
        <div className='flex'>
            {
                list.map((item, index) => {
                    return (
                        <Button name={item} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default ButtonList;
