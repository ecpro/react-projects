import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import {YOUTUBE_SEARCH_API} from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch(),
        toggleSidebar = () => {
            dispatch(toggleMenu());
        },
        [searchText, setSearchText] = useState(''),
        [searchRes, setSearchRes] = useState(null),
        [showSuggestions, setShowSuggestions] = useState(false),
        getSearchSuggestions = async (searchText) => {
            const response = await fetch(YOUTUBE_SEARCH_API + new URLSearchParams({
                    q: searchText
                })),
                data = await response.json();

            setSearchRes(data[1]);
            console.log(data[1]);
        }

    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchSuggestions(searchText)
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchText]);

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleSidebar()}
                     className='h-8 cursor-pointer'
                     src='https://t3.ftcdn.net/jpg/02/36/03/66/360_F_236036622_ctUjaJTkIANvk9pJh0s5ZJRDWbM8ggT9.jpg'
                     alt='menu'/>
                <img className='h-8 mx-6'
                     alt='youtube-logo'
                     src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'/>
            </div>
            <div className='col-span-10 px-10'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                       type={"text"}
                       onChange={(e) => {
                           setSearchText(e.target.value)
                       }}
                       onFocus={() => {
                           setShowSuggestions(true)
                       }}
                       onBlur={() => {
                           setShowSuggestions(false)
                       }}
                />
                <button className='border border-gray-400 px-5 py-2 bg-amber-100 rounded-r-full'>🔍</button>
                {
                    showSuggestions && searchRes && searchRes.length > 0 && (
                        <div className='fixed bg-blue-200 rounded-lg w-[42rem] m-2 py-1 px-2'>
                            <ul>
                                {
                                    searchRes && searchRes.map((res) => {
                                        return (
                                            <li className='p-1 m-1 hover:bg-amber-50 shadow-sm'>{res}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>)
                }
            </div>
            <div className='col-span-1'>
                <img className='h-8'
                     alt='user-image'
                     src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAh1BMVEX///8AAAD29vZqamr5+fnh4eHx8fG/v7/k5OTOzs6QkJDo6OjX19fMzMxwcHB3d3eGhoadnZ2lpaXV1dWurq5+fn60tLTt7e1PT08oKChCQkJTU1M9PT3CwsJjY2NhYWExMTEfHx8NDQ0wMDATExOXl5dAQEAgICA4ODiLi4tZWVmhoaEpKSmM4VJhAAAMoUlEQVR4nNVdaXviOAxmgZRyhfso59CBFqb9/79vS4EWybJjyXIS3i/7bBlsC9u6JVcqcdHujvu9NK19YfOF839raZr2Jv3Wx3DcaCbVyAuIiGTaX/zngWM66D4VvVguRoelD22/2E2m7aIX7Yvkg0ncDftJo/wHttt7lVF3xXJY5o1c14KIu+L4MSuaEBLNVIO6CxbTetHkILRbYSfTRDoqmqY7rOfK1H3jc1w0XRfUP2JQd8GpePk4m8Qj74y0WKb6rMhYbKg9F0ZeW0UqeJBYzC4+MXbvuK19qden06l1mvTS2nbxySNxUoCGc/Ja2Wc6WFuOWH2WdKeDyXzvNdAgX+oqU481/Rs0vX74avNjkz3abh2bpjskx6zlzAcd3pDP48wL/S83mdHPWEnakClancMf98BDZUJodN1K2aQbMnh78OIafJUDP+25FrBVuCgd5wGJzWw6Dp73MtRi5mPHHV9EvYkDx+Y1NSca/bPP1NCcCMI+60TdRnVogT3tua6Y7WwztqIoGnY9/hjlmDZt0x2iWd9PVhJV78MFY8tUp6jOhZlN/KuLxAM9zya6f6hjcR4rX0Ra+r1EOCkmLHrvXHMOWhnOTcOnr+JfPdZGeqoXOZqhnXdqBa9a94O8BR9Kg3uCNj91vBmU3vSZqAzNwIjU8ZlGGQmKvlRhXDZIRhBO4V9i1KnCcgUgRXHoUVqZQ74W5sdL9Ckk+Mu8wLhIneJ3IdyciDnEUuU9QWkcctWbuNZ5u+8MECbpi3QswiIriL3co2GuaiEbqWWOFOJQmnWng1Z/Mum3Bo1miEFH2G01yTgEU5YKnWrDTChZHsSaesdc2YE/StccRcaQq2NrtsxWGKl+Nodiu/PaSvR1MhzWqehUEBRyhYXpHpTQ1/VIdXqTXGyTwnfeAKYAFPzSNmMc4yi4jaZSw2I0JgPlr6HKiB9u+Vx1ZAzCyFkwGTHf2WpzUlnAdyKtjTG8r2E9fPoqO11tznZADPEQf32/aWhoE+7cVh+qC+xbYLhqTn7fM3Shf9yZjd/WD+xzYhwTL05oHFAmA7Y5wTzQ586EhdnO50uGZOaK0IDcGa4rxBCHHofUuD5cJcgjocAOrtZsOIWz1RG869xjE5j7xLWnsQG8yvoCtiePzAn90mccaDEn3KHvZ1isT3g+porBFO8UmDa1obO5DRS848zZCEuND6ZWj8+c807hn2PLm8tUgSTY8yY1PJsuro+D8Ez1yZE5wAFTWGDT1aGXYA2deUB9Eti8wJRMODhr12eQFcgMMVa16PvvP97EFZQdZV03lvFMF71ieixT+OKF29T2edAsKhz0BqZ6iLQni58Ur5A3Bx0mlYLJvrH4pmsuEA9kGi+EmzEETGGIFKgl9W+QZu5ledyBiLOFIFACU78PsuKYXhjVG3gG8xai6hRClCImz7Vy1SsMuG4S9HVTh0Y/AXMDFWXgDUwC0frNYAVMYuCG3IReGBe4kbqM36cbNrqqjLiA5IQOIKsCq3tbN/0ZMMxIDTA1fcRIkcqNVsgNVKup2ffgniKUzA7zvNAd4obtolRpcR1QaJNgrhlM92F7smPQx74n6GcGjnxkyXNDZUS0VAPciGTH/nUYLst0vWEQiQ8aYKd0wLS6e/8cdIayi4OJfAwNcD2IyKd3p4yhvWUHsiJVgvKTQ+D3f88o3IENe9yMojEp2FcFeT1/hR30afCjuXHo44e1kO/i5wdCliB7WB13KAH2SpBGfTMpoJTnn/woitoZ/DQhqM3c2PCS/Ks/yDxVDfDrBqBn98ZN4Kj8jA51a15OIKLl8jdoKQlSE82UFSUIchJhePLiIIVCQpC3VyYCoVJ1URWggiNo41KmIwoZ3regQEyeP2aZmAyW6ecRoHBk58RUSiUmsKA4ZzLC4JMk6bxEgh47F87kQG+MKM84En2ibHqolp0d5NBUEtXkUeU/CpAl04Mh3rHLVlaCgFxyWpCVgEEPZh3xeNmYWd07hPBMHkSAMZYESUaBmK9E8hpKq1CgD7+LTAlZs41Ikl7WOg5mAo+RoiarnIskJ2RFyFDtGCArX1g6F8VnIay5gmrHBKrfr7Ix43AZtvv5CjBIClm8tPg+imNU2lZldz9IDeaOSIuPI8Q/5XWPQBAuK2/3/8t2tZKD6uBNuhbgpV1B/iBueOloFSSFuNYUsM0/0H4SF3gS5WChEFdXA473UgFdIuQVnur69qd4KcD+20FjQl6Trn5GZUrjGUA322sRONMmUN5pBMSYXqGzO6DmXtg83IaAdjguAgOKo5VlfUDzNGDbIAJDeuzo9qEOWAg03qDmFtKmQpXNyFkMPkt6BKraTCFHyUVgUBuo4KqeX7Dr7HwJDGqpp6hxB63DdQfD2lypbWHQBjoJDOv1o7aFYQ3TEIGAuwc2SFJipIE9a1yCPvQJBBVZyC3OyiAQ6KKhzVfN4n0BgrogV9A5Qsp28AsPChops6DABOB1e2jwBvfzUwgVBrdkBBb9O7RUpZ66XwTXuIZ3jQI+mb+wYoWfpmYg8JAqrAD4CVdwQXI/wQ/ChGEoBz1jdz/gEqVCKowvatRxg0bTSzBgDWXOaPR3DhD3Gm3bIJ/rIQVSpWmvOD82TAe9AkaXTig+qPPUkdDPHSwBvwGVjSGynlR+Q6Nq2A9KbZdhhHeNorNKk1T9HnIBEMciEGDAs4PZutIs1V1R9KFS1DrOk9FqTlxnBn312oKDYc9RYlibrNdfk6XS6HVFToxxYa5auDb6A0ZcW7EtK1SGz6XkMOGXn8pvh7ezO9QCvAfmMYbyqPlWxZOXQOS3jHMBOhW+/wTfIQsw6rs1oyzVw3oydIvlJmBHYZTrks4Hk7ukXZjbhzM7/sQHoOp8xuiLC+DtezobqK8taZwLutQuOQfwqsgMlumPEWbImbajT9fW+Nc/THAu4+dQD74cBXQJ+ZKwA86AecafLC+gTkw3LPixJ4KepnCG6x9h2j2TZVeHODxP5aI0+1g9rVGXHRcifnLfqoLG6E17gMOyOqmNqPNHWwWz9SBdvn/dgeOmP6aPCZVYy3uuFvKT216hbEj/+z215FbsRQpfsqNH4zxXC7+Z0H/29B3OXLEWgV3pkignz6gQVFp++SU8Z398hkoyzPYl8/JktZTdeB0KSMivcYs87tljdT2eTmZtoodCMM8W/yjIfOd/gR9kpeSt/br/rLy5vGe/6mOWloV+prtPUusnJhr+/oiNV7zx2b8j6YubRCjv7g0jdEYdqelrXlLaJpPJZ/WKxyQ61oakAfAQwo+sFVpNfmuqlfMuTvkD2vuqw3MI07ORcUqLwkTYnLG2JtNT6mthN9klzQVRZAtyElQCSHkP6yHvli/643Wzkzy3v/CcdJrrsfkCBQPk09FIz0P3Hz0fZf7kEbo2hYBoawf/AfbSIQ6LNe7st5Pzxh8shFBbLsPaQt+HHyomMemhzyCgYjTGu+d9Cfk4XvHY3W8iOoJm5Rru6vP7SYSMei3cJSWiTwg5gIyx2xmuK6fy6uLnnTK0gVQkHEVmrw7SCPUCurjKROQUIdXgN/hvGgTVZUSX2EC6+hd1/zsnJKhkLsVGw9xAi2WFAkLrWKWr2pjiDbS5ldB+LRQa1+eDIbLgrBaHchvbomBvdvUALMUHjlQRD1dL+eEKFkdrnJInnD6zjFjQI8AdHovWGiY/ZDhkS2bX8pHplxclKZUH2d0ForXYygcesagQ31Lh8ArAF73IEPjQp/2wQp7wTM94WGHonRAmSIYsA/x7qUTr5RcXjKQM/JLRQ4BV9/uAZgUv4zRaN794YBZYP9w1ZJc+PoxD5gL+Q8WPJQ1FOZIPxGhkbR4ru6LX7Yu9sIODeo+YWBCX/z+ID0qQVnrDQzhKgyrmHiD6Imuo+YNIr53oIbhUp+QRJoVSpFLvoUqpVYnvYWhriitK66RRq3kqqWkRIP8w2ro9xVSwD+hyZ6L+lj1jvliFdBCjEOnxKCn4T+9kolQZXcF9YSiUiJlqlozeYVaSpNGVZpUqRKSu/TwodWugUYJjqtJPxI66MPNeC1tt6WCiUPNCSfl0oxrpgZBs1FQL0h0oxr7YRxIOJApIwxe3qZehnTOz2YR1BpVglKPYXyhaRgwwKgmDcMzz8kFMc7ATP3MRDVY0Ij1Re8OquN27oRuxciS7gDQXPEfK/vKtns8DY3WXxrzYq2ciOSkynJeBqkdJC02do/rS0up9FgGj0y6MusWgxNRdkAzE5ce1aTxnhCrqjT77kZv5oRwiwRvV5rDnyVpXvXExuqYC6smoMR4eTpNemqa1L2w2tW+kaW9yGgyn3U7kU/k/51zCOZFXr7oAAAAASUVORK5CYII='/>
            </div>
        </div>

    );
};

export default Header;
