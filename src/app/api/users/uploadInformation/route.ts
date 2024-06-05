import { connect } from "@/DBConfig/DBConfig";
import { NextRequest, NextResponse } from "next/server";
import Data from "@/models/userPortfolio";
// import { getServerSession } from "next-auth/next"

connect()
export async function GET(){
    return NextResponse.json({
        pp:'pp'
    })
}
export async function POST(request: NextRequest, response: NextResponse){
    // const session = await getServerSession(request, response, authOptions)
    try {
        const reqBody = await request.json()
        const {username, findUser, whatyouare, summary, resume, abouttext, address, mobile, sociallinks, technology, projects, experience} = reqBody
        //const description_short = description.slice(0,50)+"...";
        // Save Message
        console.log(reqBody);
        const newPortfolio = new Data({
            username, findUser, whatyouare, summary, resume, abouttext, address, mobile, sociallinks, technology, projects, experience
        })
        console.log(newPortfolio)
        await newPortfolio.save();

        return NextResponse.json({
            message: "Portfolio saved successfully",
            success: true,
        })

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function PUT(request: NextRequest) {

    try {
        const reqBody = await request.json();
        console.log("request body ================== ", reqBody);
        const {username} = reqBody;
        console.log("username is .......", username)
        const PortfolioData = await Data.find({username: username});
        //console.log(member);
        console.log(PortfolioData);
        return NextResponse.json({
            PortfolioData
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

// export async function PUT(request: NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const {_id, title, description} = reqBody;
//         const description_short = description.slice(0,50);
//         const Post = await History.findOne({_id: _id});
        
//         if(title!=="") {
//             Post.title=title;
//         }
//         if(description!==""){
//             Post.description=description;
//             Post.description_short=description_short;
//         }
        
//         await Post.save();
//         return NextResponse.json({
//             message: "History Updated",
//         })
//     } catch (error: any) {
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }