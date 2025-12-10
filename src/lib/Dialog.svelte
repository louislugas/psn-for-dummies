<script>
    import Avatar from "./Avatar.svelte";

    export let index, area = 0, match = false, time = 30

    let visible = false
    let next = false

    function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		// if (!valid) {
		// 	throw new Error(`This transition only works on elements with a single text node child`);
		// }

		const text = node.textContent
		const duration = text.length / (speed * 0.1)
		
		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0,i)
                if (i < text.length) {
                    next = false
                } else if (i == text.length) {
                    setTimeout(() => {
                        next = true
                    }, 250)
                }
			}
		};
	}

    function goto(n) {
        index = n
    }

    $: if (index) {
        visible = false
        next = false
        setTimeout(() => {
            visible = true
        }, 500)
    }
</script>

<div class="dialog">
    <div class="text">
        {#if index == 3} <!-- PILIH SEKTOR -->
            <p in:typewriter>
                Ini contoh proyek-proyek yang banyak dikasih label PSN. Ada juga sih proyek lain macam PLTS dan IKN, tapi... Ah, sudahlah. Gak jelas itu.<br><br>Kalau dari contoh di atas, kamu tertarik yang mana?
            </p>
            {#if next}
            <button on:click={() => goto(4)}>Lanjut</button>
            {/if}

        {:else if index == 4} <!-- INFOGRAFIS STATIS -->
            <p in:typewriter>
                Ini kriteria biar proyek kamu masuk daftar PSN. Tapi gak usah diambil pusing. Yang penting poin terakhir aja. Buat kamu, duit Rp500 miliar <em>sih</em> sepele.
            </p>
            {#if next}
            <button on:click={() => goto(5)}>Lanjut</button>
            {/if}

        {:else if index == 5} <!-- INFOGRAFIS STATIS -->
            <p in:typewriter>
                Yang terakhir dan nggak kalah penting  itu Kriteria Operasional. Terutama duit investasinya, itu yang paling penting.
            </p>
            {#if next}
            <button on:click={() => goto(6)}>Lanjut</button>
            {/if}

        {:else if index == 5} <!-- MENCOCOKKAN DOKUMEN -->
            <p in:typewriter>
                Nah, sekarang kamu harus melengkapi dokumen-dokumen terkait biar proyekmu segera disetujui.
            </p>
            <p in:typewriter>
                Geser dokumen di sebelah kiri ke map di sebelah kanan sesuai dengan kategorinya ya!
            </p>
            {#if match}
            <button on:click={() => goto(7)}>Lanjut</button>
            {/if}
        {:else if index == 6} <!-- MENCOCOKKAN DOKUMEN -->
            <p in:typewriter>
                Selamat! Dokumen persyaratanmu sudah lengkap!
            </p>
            {#if next}
            <button on:click={() => goto(7)}>Lanjut</button>
            {/if}

        {:else if index == 7} <!-- PILIH AREA -->
            <p in:typewriter>
                Sebelumnya kamu sudah memilih sektor, sekarang pilih di mana lokasi proyekmu! Pastikan sektormu sesuai dengan tata ruang lokasinya yaa~
                <br>
                <br>
                Klik area di peta untuk memilih sektor.
            </p>

        {:else if index == 8} <!-- SOSIALISASI PROYEK -->
            <p in:typewriter>
                Kamu mau sosialisasikan gak proyeknya?
            </p>

        {:else if index == 9} <!-- DENGARKAN MASYARAKAT ( INTRO )-->
            {#if time > 10 && time <= 30}
            {#if visible}
            <p in:typewriter>
                Hmm... Coba saya mau lihat bagaimana cara kamu jelaskan pro-kontra proyek ke masyarakat.
                <br><br>
                Klik warga yang angkat tangan untuk <em>dengerin</em> aspirasinya.
            </p>
            {/if}
            {:else if time <= 10 && time > 0}
            <p>
                {time} detik lagi!
            </p>
            {:else if time == 0}
            <p>
                Waktu habis!
            </p>
            {/if}

        {:else if index == 11} <!-- PROTES MASYARAKAT -->
            <p in:typewriter>
                Gak usah sosialisasi juga santai sebenarnya. Kalau warga protes, tinggal turunkan polisi atau tentara untuk mengamankan.
                <br><br>
                Kamu maunya aparat bertindak sejauh mana?
            </p>

        {:else if index == 12} <!-- JURUS CUCI DOSA 1 -->
            <!-- <h3>Joko Widodo</h3> -->
            <!-- <p in:typewriter>
                Cita-citanya kan mau buat proyek strategis nasional yang berkelanjutan ya? Baiknya pelajari dulu deh preseden proyek-proyek sebelumnya biar tidak melakukan kesalahan yang sama.
            </p> -->

        {:else if index == 13} <!-- JURUS CUCI DOSA 2 -->
            <!-- <h3>Sri Mulyani</h3> -->
            <p in:typewriter>
                Pilih satu jurus yang kamu paling cocok!
            </p>

        {:else if index == 15} <!-- TAMBAH LABEL HIJAU -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                Nah gitu dong, tinggal tambah label saja kan gampang.
            </p>
            {#if next}
            <button on:click={() => goto(16)}>Lanjut</button>
            {/if}

        {:else if index == 16} <!-- CEK FAKTA LAPANGAN KERJA -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                Akhirnya proyekmu selesai! Bener nggak proyekmu udah ciptain lapangan kerja?
            </p>
        {:else if index == 17} <!-- FAKTA LAPANGAN KERJA -->
            <!-- tanpa dialog -->
            <h3>Airlangga Hartanto</h3>
            <p in:typewriter>
                PSN + hilirisasi = kunci kekuatan ekonomi Indonesia.
            </p>
            {#if next}
            <button on:click={() => goto(18)}>Tapi...</button>
            {/if}

        {:else if index == 18} <!-- FAKTA LAPANGAN KERJA -->
            <!-- tanpa dialog -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                ...
            </p>
            {#if next}
            <button on:click={() => goto(19)}>Lanjut</button>
            {/if}

        {:else if index == 19} <!-- FAKTA LAPANGAN KERJA -->
            <!-- tanpa dialog -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                ...
            </p>
            {#if next}
            <button on:click={() => goto(20)}>Lanjut</button>
            {/if}
        {:else if index == 20} <!-- FAKTA LAPANGAN KERJA -->
            <!-- tanpa dialog -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                ...
            </p>
            {#if next}
            <button on:click={() => goto(21)}>Lanjut</button>
            {/if}
        {:else if index == 21} <!-- FAKTA LAPANGAN KERJA -->
            <h3>Prabowo Subianto</h3>
            <p in:typewriter>
                Prabowo-Gibran punya program yang sangat jelas, yaitu melanjutkan semua programnya Pak Jokowi.
            </p>
            {#if next}
            <button on:click={() => goto(22)}>Lanjut</button>
            {/if}
        {:else if index == 22} <!-- RESUME PROYEK -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                Akhirnya proyekmu selesai juga, gimana pelayanan kami? oke kan? Ini terlampir resume proyekmu ya. Semoga berhasil dan sukses terus, siapa tau bisa bikin proyek strategis nasional lagi.
            </p>
        {:else if index == 23} <!-- GAME OVER via AMDAL -->
            <h3>Luhut Binsar Panjaitan</h3>
            <p in:typewriter>
                Kelamaan! Status PSN-mu kami cabut!
            </p>
        {:else if index == 24} <!-- GAME OVER via LABEL HIJAU -->
            <h3>Joko Widodo</h3>
            <p in:typewriter>
                Status PSN-mu kami batalkan!
            </p>
        {/if}
    </div>

    {#if index <= 13}
        <div class="avatar">
            <Avatar bind:index bind:area bind:time/>
        </div>
    {/if}
    
</div>

<style>
    .dialog {
        width:min(660px, 100%);
        background-color: #fdf10f;
        height:200px;
        display: flex;
        position: absolute;
        bottom:0;
        border-top: solid #089f5e 5px;
    }
    .text {
        width:100%;
        /* background-color: aquamarine; */
    }
    .avatar {
        width:40%;
        /* background-color: chartreuse; */
        /* position: absolute; */
        bottom:200px;
        height:100%;
        margin-right:1rem;
        /* bottom:100%;
        right:1rem; */
        pointer-events: none;
    }
    .text > p {
        margin:1rem;
        font-family: "Noto Sans", sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        /* margin-top:0; */
    }
    .text > h3 {
        margin-left:1rem;
        margin-bottom:0.5rem;
        margin-top:0.5rem;
        font-family: "Lexend Giga", sans-serif;
    }
    button {
        margin-left:1rem;
        font-family: 'Noto Sans', sans-serif;
        background-color: lightyellow;
        border-radius: 0.5rem;
        font-weight: 600;
        padding:0.3rem;
        padding-left:0.8rem;
        padding-right:0.8rem;
    }

    @media only screen and (max-width: 500px) {
        .dialog {
            position: absolute;
            bottom:0;
            height:180px;
        }
        .text > p {
            font-size:0.8rem;
            line-height: 1rem;
        }
        .text {
            width:100%;
            
        }
        .avatar {
            position:absolute;
            width:40%;
            bottom:180px;
            right:0;
        }
    }
</style>