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
export async function POST(request: NextRequest, response: NextResponse) {
    // const session = await getServerSession(request, response, authOptions)
    try {
        const reqBody = await request.json();
        const {
            template, username, findUser, whatyouare, summary, resume, abouttext, address, mobile, sociallinks, technology, projects, experience, email
        } = reqBody;

        console.log("Received Request Body:", reqBody);

        // Check if a portfolio with the specified findUser already exists
        const existingPortfolio = await Data.findOne({ findUser });

        if (existingPortfolio) {
            // Update the existing portfolio
            const updatedPortfolio = await Data.findOneAndUpdate(
                { findUser },
                {
                    template, username, whatyouare, summary, resume, abouttext, address, mobile, sociallinks, technology, projects, experience, email
                },
                { new: true } // Return the updated document
            );

            console.log("Updated Portfolio:", updatedPortfolio);

            return NextResponse.json({
                message: "Portfolio updated successfully",
                success: true,
            });
        } else {
            // Create a new portfolio
            const newPortfolio = new Data({
                template, username, findUser, whatyouare, summary, resume, abouttext, address, mobile, sociallinks, technology, projects, experience, email
            });

            console.log("New Portfolio:", newPortfolio);
            await newPortfolio.save();

            return NextResponse.json({
                message: "Portfolio saved successfully",
                success: true,
            });
        }

    } catch (error: any) {
        console.log("Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {

    try {
        const reqBody = await request.json();
        console.log("request body ================== ", reqBody);
        const {findUser} = reqBody;
        // console.log("username is .......", username)
        const PortfolioData = await Data.find({findUser: findUser});
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