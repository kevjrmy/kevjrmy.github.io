// import nodemailer from 'nodemailer'

// const config = useRuntimeConfig()

// const transporter = nodemailer.createTransport({
// 	host: config.EMAIL_HOST,
// 	port: 587,
//   secure: false,
// 	auth: {
// 		user: config.EMAIL_ADDRESS,
// 		pass: config.EMAIL_TOKEN,
// 	}
// })

export default defineEventHandler(async(event) => {
  let res = event.node.res
  if (res === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.statusCode = 204
    res.end()
    console.log("all right")
    return
  }
  else console.log(event)

  try {
    const body = await readBody(event)
    // const output = `
    // <ul>  
    //   <li>Name    : ${body.name}</li>
    //   <li>Phone   : ${body.tel}</li>
    //   <li>Email   : ${body.email}</li>
    //   <li>Message : ${body.message}</li>
    // </ul>`

    // const options = {
    //   from: 'My portfolio',
    //   to: config.EMAIL_ADDRESS,
    //   subject: "Message from my portfolio",
    //   text: "Mail notification from Phoenyx Networks",
    //   html: output
    // }    

    // await transporter.sendMail(options)
    
    return Promise.resolve(201)
  } catch(err) {
    sendError(event, createError({statusCode: 400, statusMessage: err}))
  }
})