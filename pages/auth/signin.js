import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'


//Browser.....
function signIn({ providers }) {
    return (
        <>
            {providers && providers.length && Object.values(providers).map((provider) => (
                <div key={provider.name}>
                <h3>this is text</h3>
                    <button onClick={() => SignIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}


//Server side Rendering
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signIn;
