/**
 * 模块注册
 */

( function ( global ) {

    define( 'kf.start', function ( require ) {

        var KFEditor = require( "editor/editor" );

        // 注册组件
        KFEditor.registerComponents( "ui", require( "ui/ui" ) );
        KFEditor.registerComponents( "parser", require( "parse/parser" ) );
        KFEditor.registerComponents( "render", require( "render/render" ) );
        KFEditor.registerComponents( "position", require( "position/position" ) );
        KFEditor.registerComponents( "syntax", require( "syntax/syntax" ) );
        KFEditor.registerComponents( "control", require( "control/controller" ) );
        KFEditor.registerComponents( "print", require( "print/printer" ) );

        kf.Editor = KFEditor;

    } );

    // build环境中才含有use
    try {
        use( 'kf.start' );
    } catch ( e ) {
    }

} )( this );
