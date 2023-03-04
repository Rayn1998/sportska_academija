function importAll(r) {
    return r.keys().map(r);
}

const images = {

    shipImages: importAll(
        require.context(
            '../images/other_projects/ship/',
            false,
            /\.(png|jpe?g|svg)$/
        )
    ),

    tankImages: importAll(
        require.context(
            '../images/other_projects/tank/',
            false,
            /\.(png|jpe?g|svg)$/
        )
    ),

    saxonpistolImages: importAll(
        require.context(
            '../images/other_projects/saxonpistol/',
            false,
            /\.(png|jpe?g|svg)$/
        )
    ),

    frenchflintlockImages: importAll(
        require.context(
            '../images/other_projects/frenchflintlock/',
            false,
            /\.(png|jpe?g|svg)$/
        )
    ),

    ak47Images: importAll(
        require.context(
            '../images/other_projects/ak47/',
            false,
            /\.(png|jpe?g|svg)$/
        )
    ),

    handImages: importAll(
        require.context(
            '../images/other_projects/hand/',
            false,
            /\.(png|jpe?g|svg|mp4)$/
        )
    ),

    waterdropImages: importAll(
        require.context(
            '../images/other_projects/waterdrop/',
            false,
            /\.(png|jpe?g|svg|mp4)$/
        )
    ),

    rainImages: importAll(
        require.context(
            '../images/other_projects/rain/',
            false,
            /\.(png|jpe?g|svg|mp4)$/
        )
    ),
}

export default images