<script>
    import Swal from 'sweetalert2';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let email = '';
    let message = '';

    // @ts-ignore
    const sendMessage = async (e) => {
        e.preventDefault();

        if (!emailRegex.test(email)) {
            return;
        }

        if(message.length < 1) {
            Swal.fire({
                
                title: 'Message is empty!',
                text: 'Please write a message before sending.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }

        let emailMessage = `
        <h1> New message from BOOKMARK.JOEL-UZCATEGUI.COM.</h1>
        <strong>Email</strong>: ${email} <br>
        <strong>Message</strong>: <br>
        ${message}
        `;

        Swal.fire({
            title: 'Loading...',
            allowOutsideClick: false,
        });
        Swal.showLoading();

        fetch('https://api.joel-uzcategui.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: emailMessage})
        })
        .then(response => {
            Swal.fire({
                
                title: 'Message sent!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'Close'
            });
            email = '';
            message = '';
        })
        .catch(error => {
            Swal.fire({
                title: 'Oops, something went wrong!',
                text: 'There was an error sending your message. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        })

    }

</script>

<section id="contact" class="bg-softBlue">
    <div class="max-w-lg mx-6 md:mx-auto py-24">
        <h2 class="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Contact Us
        </h2>
        <p class="mb-6 text-lg tracking-widest text-center text-white">
            Feel free to write us any inquiries you may have. We love receiving your messages and are committed to responding as quickly as possible.
        </p>
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                <input bind:value={email} type="email" id="email" class="border-2 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-grayishBlue focus:outline-none" placeholder="jhon@mail.com" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                <textarea bind:value={message} id="message" rows="6" class="border-2 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-grayishBlue focus:outline-none" placeholder="Leave a comment..."></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit" on:click={sendMessage} class="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600">Send message</button>
            </div>
        </form>
    </div>
</section>



<style>
    .no-scroll {
    overflow: hidden !important;
    }
</style>