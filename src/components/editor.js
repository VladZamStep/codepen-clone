import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { CgCompressRight, CgExpand } from 'react-icons/cg'


export default function Editor(props) {
    const {
        displayName,
        language,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button
                    type='button'
                    className='expand-collapse-btn'
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                    {open ? <CgExpand /> : <CgCompressRight />}
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true
                }}
            />
        </div>

    )
}
