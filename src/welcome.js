import React from "react";
import axios from "axios";
import Table from "antd/es/table";
import Button from "antd/es/button";
export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            showModal:false,
            name:"ABC",
            person:[],
            student:[{
                id:'0',
                name:'a',
                age: '11',
                sex:'1'
            }]
        })
    }
    open=(text)=>{

        this.setState({
            showModal:true,
        })
        var index=text.id-1;
        var up=document.getElementsByClassName('updateBody')[index]
        up.style.display="block"
    }
    close=(text)=>{
        this.setState({
            showModal:false
        })
        var index=text.id-1;
        var up=document.getElementsByClassName('updateBody')[index]
        up.style.display="none"
    }

    componentDidMount() {
        // this.setState({
        //     student:this.state.student
        // })
        // console.log(this.state)
        // this.setState({
        //     name: 'ABC'
        // });
        axios.get('/mock', {dataType: 'json'})
            .then(res => {
                console.log(res.data.userinfo)
                this.setState({
                    person:res.data.userinfo
                })
            })
    }
update=(text)=>{

        console.log(text)
        var index=text.id-1;
        const person=this.state.person;
    var name=document.getElementsByClassName('name1')[index].value;
    var age=document.getElementsByClassName('age1')[index].value;
    var sex=document.getElementsByClassName('sex1')[index].value;
    person[index]={
        id:index+1,
        name:name,
        age:age,
        sex:sex
    }
    console.log(person)
    this.setState({
        person:person
    })
    this.close(text);

}

delete=(text)=>{
        console.log(text)
    var index=text.id-1;
        const person=this.state.person;
        person.splice(index,1);
        this.setState({
            person:person
        })

}
    addData=()=>{
        var id=this.state.person.length+1;
        var name=document.getElementById('name').value;
                var age=document.getElementById('age').value;
                var sex=document.getElementById('sex').value;
                const student = this.state.person
                const newStudent={
                    id:id,
                    name:name,
                    age:age,
                    sex:sex
                }
                student.push(newStudent)
                this.setState({
                    person:student
                })
                console.log(this.state.student);
                document.getElementById('name').value="";
                document.getElementById('age').value="";
                document.getElementById('sex').value="";
        //         // const addData={
        //     name:name,
        //     age:age,
        //     sex:sex
        // }
        // console.log(addData)
        // axios.post('/addData',addData);

    }


    render() {
        var Mock = require('mockjs')
        var data = [];
        Mock.mock("/mock", {
            "userinfo|3": [{
                "id|+1": 1,
                "name": "@cname",
                "age|18-28": 25,
                "sex|1": ["男", "女"],

            }]
        });

        Mock.mock("/addData",function (addData) {
            console.log(addData.body);
            var newData=JSON.parse(addData.body);
            console.log(newData)
            console.log(data)
            // data.add(newData)
        })
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
            },{
            title:'操作',
                key:'action',
                render:(text)=>(
                    <div>
                        <Button type="primary" onClick={()=>this.open(text)}>
                           修改
                        </Button>


                    <Button onClick={()=>this.delete(text)}>删除</Button>
                        <div className="updateBody" style={{display:'none'}}>
                            姓名：<input type="text" className="name1"/>
                            年龄：<input type="text" className="age1"/>
                            性别：<input type="text" className="sex1"/>
                            <button onClick={()=>this.update(text)}>修改</button>
                        </div>
                    </div>
                )

            }
        ];

        return (
            <div>
                    姓名：<input type="text" id="name"/>
                    年龄：<input type="text" id="age"/>
                    性别：<input type="text" id="sex"/>
                    <button onClick={()=>this.addData()}>添加</button>


                {/*{this.state.student.map(*/}
                {/*    (value)=>{*/}
                {/*        return(*/}
                {/*            <div>*/}
                {/*                {value.name}*/}
                {/*                {value.age}*/}
                {/*                {value.sex}*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    }*/}
                {/*)}*/}

                <Table dataSource={[...this.state.person]} columns={columns} />;
                {/*<Table dataSource={[...this.state.student]} columns={columns} />;*/}

            </div>
        )
    }


}