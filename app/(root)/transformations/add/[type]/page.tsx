import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm ';

import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs/server';


import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
    // const { userId } =  await auth();
    // const { type } = await params;

    // const transformation = transformationTypes[type];
  
    // // if(!userId) redirect('/sign-in')
  
    // const user = {
    //  _id:"user_2yxxlmLq4y1RJ33LWYPBNRvOSv4",
    //   username:"hamzaamir",
    //   first_name:"Hamzah",
    //   last_name:"Amir",
    //   image_url:"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yeXh4bHBqSE5Ub2FHcnlUYksxTVJkOFFpZk0ifQ",
    //   creditBalance :10,   }
  
  
  
  const { userId } =  await auth();
     console.log(userId);
  const { type } = await params;

  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
     <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
        />
    
     <section className="mt-10">
        <TransformationForm 
        action='Add'
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
        />
       </section>
       </>
   
  )
}

export default AddTransformationTypePage