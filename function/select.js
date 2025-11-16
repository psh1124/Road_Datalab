function updateData(rowNumber) {
    const outputElements = [
        'output', 'output2', 'output3', 'output4', 'output5', 'output6'
    ].map(id => document.getElementById(id));

    const extraRows = [
        document.getElementById('extraRow'),
        document.getElementById('extraRow2')
    ];

    const selectedRow = csvData[rowNumber];
    if (!selectedRow) return;

    outputElements.forEach(el => (el.textContent = ''));

    selectedRow.forEach((val, idx) => {
        if (outputElements[idx]) {
            outputElements[idx].textContent = formatString(val.trim());
        }
    });

    const mapUrls = {
        "pair-1": [
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/9zh3biujaidt54kkyqg5a/keplergl_0r603nd.json?rlkey=mg07r3jxn12n4aw6qg8q3hso3&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/4ktobevp3ds5sxvoe2ifs/keplergl_ec2bmq.json?rlkey=9kxiegp2sttre8kvtk8kcmq2q&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/ds01mksvw13qj1sirjopb/keplergl_rhgcm2g.json?rlkey=qwcs2jn6yfjwr4td2rkcy4151&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/ekvelfodm9pvazbmehyp4/keplergl_dif3xptd.json?rlkey=0pwjiweag582p3rtnvypjzony&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/b1b66ozbcbhps4p5gh21e/keplergl_wv9jxe7.json?rlkey=7m4084wg3ohpwm3y0w8wxp0wq&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/gnq07iul8u53ndv5uyr6x/keplergl_5y5quc7.json?rlkey=yga7u2v8lqn7o4rdsr276twog&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/r0goqnnv8orce6v1des4i/keplergl_xuwxacf.json?rlkey=3lxec2rh6u5v0hid51yf9o3i8&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/z0z7budxiqzphh0va2sjn/keplergl_azt7vt.json?rlkey=ijq4d8la28a58w119a24puixb&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/seyql52w2txkfz1ikhfqe/keplergl_o4y8kbe.json?rlkey=yreiui6q6vh9jhh67euyoj8su&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/dve7eyi0fe78xo1hmi8ng/keplergl_oy8rorm.json?rlkey=tf1kcoeqofz9toyai70c1y14h&dl=0"
        ],

        "pair-2": [
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/f0y5vl7jft9e7xth64i4v/keplergl_19gah53.json?rlkey=wf7yfw57uzta542gc0vcu7zxs&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/i4026pmodj2hr34qys99m/keplergl_4yc59nn.json?rlkey=b8x24n02qht4d6feupkqvte06&dl=0", 
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/85lahuxc8bwa317ldzsq3/keplergl_4axod4b.json?rlkey=rwfse38np4u3s6q923hy9kdhm&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/6riaw553byrbt35x5m1fn/keplergl_ip03syb.json?rlkey=tuocjrtdoqxkokb7sfpyo7gyf&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/0ecs0zncw3gvrz206wmwx/keplergl_msp293n.json?rlkey=ucu0knihznr5rhjaqw0vjn1so&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/bu84vdqrdld6n1kyhpwb7/keplergl_yn9w209.json?rlkey=z48l6gml6a040xl6cxkdkbs7h&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/cw6j3jdcpyoeck52i2c18/keplergl_bqat0mc.json?rlkey=5hrd9ut1yf8jknnn72m7ang9b&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/rhp41jbpc8u2qfzvi8xr5/keplergl_iw020j.json?rlkey=b6za7o526mkx8jb6hz7epwk38&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/9f6gbaao7yvv8wvbwhjwu/keplergl_oiofzj.json?rlkey=v07v6veeuhgigg2tbdeaz78pj&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/u6hb77nu3gfoshyq5fqic/keplergl_mngqsnr.json?rlkey=7fu7pj49zmo60qvws2hb8vsfz&dl=0"
        ],
        "pair-3": [
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/cydjvikhjh95h0wpggdzv/keplergl_3x9so8q.json?rlkey=hgh7d2db0lgrip6yfh2gz0ts3&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/vrdk78lotgvhtdcrpqhe5/keplergl_grad9n.json?rlkey=hye8gzbb9ey2utt7bgi29pyo1&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/lsdj48bdubx28sz6z1dzv/keplergl_cw9862j.json?rlkey=gzq5fe5hsduyiqg5jkgqbeoxu&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/ler7frrl2zd3vwpep03mr/keplergl_05fvqi5.json?rlkey=ccs3swnwk901danqrhmifj7pu&dl=00",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/rkr6ybbu1qjaeyiat40h4/keplergl_gs4nhhm.json?rlkey=1f3nf32iktbx7dbt4qmnkm8k3&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/ih3etvoag3feshytoj7iy/keplergl_b0fwbp.json?rlkey=9qlj9obbmy39ybk4ooff48wxz&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/h1g2umglffh9aybfhknsb/keplergl_3y42248.json?rlkey=cjh4xi67g5m01y66vy9j1yx4t&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/qp1a6s04z66zt0y5abh2y/keplergl_ks5iifo.json?rlkey=qavpkl4nfoe6z90uro94j3cb1&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/g0t8w0k4nd9l9ymcozv6h/keplergl_g4kdisw.json?rlkey=9l31esqmfw0c2c3ov52r7il7o&dl=0",
            "https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/scl/fi/frf7qgkb83hgtcfxvdxof/keplergl_cymtmrg.json?rlkey=y84revabslg6yt6jx6de8drb0&dl=0"
        ]
    };

    const pairUrls = mapUrls[currentPair];
    document.getElementById('mapIframe').src = pairUrls[rowNumber] || "";

    if (currentPair === "pair-1") {
        extraRows[0].style.display = "none";
        extraRows[1].style.display = "none";
    } else if (currentPair === "pair-2") {
        extraRows[0].style.display = "table-row";
        extraRows[1].style.display = "none";
    } else {
        extraRows[0].style.display = "table-row";
        extraRows[1].style.display = "table-row";
    }
}